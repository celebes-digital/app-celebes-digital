<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TimescheduleResource\Pages;
use App\Filament\Resources\TimescheduleResource\RelationManagers;
use App\Models\Timeschedule;
use Carbon\Carbon;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Facades\Auth;

class TimescheduleResource extends Resource
{
    protected static ?string $model = Timeschedule::class;

    protected static ?string $navigationGroup = 'Production';

    protected static ?string $navigationIcon = 'heroicon-o-clock';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make([
                    Forms\Components\Select::make('item_kerja_id')
                        ->label('Pekerjaan')
                        ->relationship('itemKerja', 'name')
                        ->preload()
                        ->required(),

                    Forms\Components\Select::make('pic_id')
                        ->relationship('pic', 'name', fn($query) => $query->whereHas('role', function ($q) {
                            $q->where('name', 'production')
                                ->orWhere('name', 'cto');
                        }))
                        ->multiple()
                        ->preload()
                        ->required(),

                    Forms\Components\DatePicker::make('tgl_mulai')
                        ->label('Tanggal Mulai')
                        ->native(false)
                        ->default(now())
                        ->displayFormat('d/m/Y')
                        ->required()
                        ->reactive()
                        ->minDate(Carbon::today())
                        ->afterStateUpdated(function ($state, callable $set, callable $get) {
                            if ($get('tgl_selesai') < $state) {
                                $set('tgl_selesai', $state);
                            }
                        }),
                    Forms\Components\DatePicker::make('tgl_selesai')
                        ->label('Tanggal Selesai')
                        ->native(false)
                        ->displayFormat('d/m/Y')
                        ->default(now())
                        ->required()
                        ->reactive()
                        ->minDate(fn(callable $get) => $get('tgl_mulai')),

                    Forms\Components\RichEditor::make('description')
                        ->required()
                        ->columnSpan(2),
                ])->columns(2)
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('pic.name')
                    ->searchable(),

                Tables\Columns\TextColumn::make('itemKerja.name')
                    ->label('Pekerjaan')
                    ->badge(),

                Tables\Columns\TextColumn::make('tgl_mulai')
                    ->sortable()
                    ->formatStateUsing(
                        fn(string $state) =>
                        Carbon::parse($state)
                            ->locale('id')
                            ->translatedFormat('d F Y')
                    ),

                Tables\Columns\TextColumn::make('tgl_selesai')
                    ->sortable()
                    ->formatStateUsing(
                        fn(string $state) =>
                        Carbon::parse($state)
                            ->locale('id')
                            ->translatedFormat('d F Y')
                    ),

                Tables\Columns\ToggleColumn::make('is_finished')
                    ->label('Selesai?')
                    ->onColor('success')
                    ->visible(fn() => Auth::user()->role->name === 'cto' || Auth::user()->role->name === 'production'),

                Tables\Columns\TextColumn::make('status')
                    ->label('Status')
                    ->visible(fn() => Auth::user()->role->name !== 'cto' && Auth::user()->role->name !== 'production')
                    ->formatStateUsing(fn($state) => $state ? 'Selesai' : 'On Progress')
                    ->color(fn($state) => $state ? 'success' : 'warning')
                    ->sortable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->sortable()
                    ->formatStateUsing(
                        fn(string $state) =>
                        Carbon::parse($state)
                            ->locale('id')
                            ->translatedFormat('d F Y')
                    )

                    ->toggleable(isToggledHiddenByDefault: true),

                Tables\Columns\TextColumn::make('updated_at')
                    ->sortable()
                    ->formatStateUsing(
                        fn(string $state) =>
                        Carbon::parse($state)
                            ->locale('id')
                            ->translatedFormat('d F Y')
                    )
                    ->toggleable(isToggledHiddenByDefault: true)
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('pic')
                    ->relationship('pic', 'name', fn($query) => $query->whereHas('role', function ($q) {
                        $q->where('name', 'production')
                            ->orWhere('name', 'cto');
                    }))
                    ->multiple()
                    ->preload(),

                Tables\Filters\SelectFilter::make('Item Kerja')
                    ->relationship('itemKerja', 'name')
                    ->multiple()
                    ->preload(),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTimeschedules::route('/'),
            'create' => Pages\CreateTimeschedule::route('/create'),
            'edit' => Pages\EditTimeschedule::route('/{record}/edit'),
        ];
    }
}
