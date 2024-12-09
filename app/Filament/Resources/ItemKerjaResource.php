<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ItemKerjaResource\Pages;
use App\Models\ItemKerja;
use Carbon\Carbon;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ItemKerjaResource extends Resource
{
    protected static ?string $model = ItemKerja::class;

    protected static ?string $navigationGroup = 'Production';

    protected static ?string $navigationIcon = 'heroicon-o-clipboard';

    public static function getLabel(): string
    {
        return 'Pekerjaan';
    }

    public static function getPluralLabel(): string
    {
        return 'Pekerjaan';
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make([
                    Forms\Components\TextInput::make('name')
                        ->required()
                        ->maxLength(255),
                ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('schedule_count')
                    ->label('Total Item')
                    ->getStateUsing(function ($record) {
                        return $record->schedule()->count();
                    })
                    ->alignCenter(),
                Tables\Columns\TextColumn::make('progress_count')
                    ->label('Total Item (On Progress)')
                    ->getStateUsing(function ($record) {
                        return $record->schedule()->where('is_finished', false)->count();
                    })
                    ->alignCenter(),
                Tables\Columns\TextColumn::make('created_at')
                    ->sortable()
                    ->formatStateUsing(
                        fn(string $state) =>
                        Carbon::parse($state)
                            ->locale('id')
                            ->translatedFormat('d F Y')
                    )
                    ->toggleable(isToggledHiddenByDefault: false),
                Tables\Columns\TextColumn::make('updated_at')
                    ->sortable()
                    ->formatStateUsing(
                        fn(string $state) =>
                        Carbon::parse($state)
                            ->locale('id')
                            ->translatedFormat('d F Y')
                    )
                    ->toggleable(isToggledHiddenByDefault: false)
            ])
            ->filters([
                //
            ])
            ->actions([
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
            'index' => Pages\ListItemKerjas::route('/'),
            'create' => Pages\CreateItemKerja::route('/create'),
            'edit' => Pages\EditItemKerja::route('/{record}/edit'),
        ];
    }
}
