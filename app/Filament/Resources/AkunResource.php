<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AkunResource\Pages;
use App\Models\User;
use Carbon\Carbon;
use Filament\Forms;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Pages\Page;
use Filament\Resources\Pages\CreateRecord;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

class AkunResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $navigationGroup = 'Admin';

    protected static ?string $navigationIcon = 'heroicon-o-users';

    public static function canAccess(): bool
    {
        return Auth::user()->role->name === 'admin';
    }

    public static function shouldRegisterNavigation(): bool
    {
        return Auth::user()->role->name === 'admin';
    }

    public static function getNavigationVisibility(): bool
    {
        return Auth::check() && Auth::user()->role->name === 'admin';
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make([
                    TextInput::make('name')
                        ->placeholder('Nama karyawan')
                        ->required()
                        ->maxLength(255)
                        ->columnSpan(2),

                    TextInput::make('email')
                        ->placeholder('Email karyawan')
                        ->email()
                        ->maxLength(255)
                        ->unique(ignoreRecord: true)
                        ->required(),

                    Forms\Components\Select::make('role_id')
                        ->relationship('role', 'name')
                        ->preload()
                        ->required(),

                    TextInput::make('password')
                        ->password()
                        ->placeholder('Password akun karyawan')
                        ->autocomplete(false)
                        ->required(fn(Page $livewire): bool => $livewire instanceof CreateRecord)
                        ->dehydrated(fn($state) => filled($state))
                        ->maxLength(255)
                        ->revealable()
                        ->confirmed(),

                    TextInput::make('password_confirmation')
                        ->name('Password Confirmation')
                        ->password()
                        ->autocomplete(false)
                        ->required(fn(Page $livewire): bool => $livewire instanceof CreateRecord)
                        ->revealable()
                        ->placeholder('Konfirmasi password')
                        ->dehydrated(false)
                ])->columns(2)
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->searchable()->sortable(),
                TextColumn::make('email')->searchable(),
                TextColumn::make('role.name'),
                TextColumn::make('created_at')
                    ->sortable()
                    ->formatStateUsing(
                        fn(string $state) =>
                        Carbon::parse($state)
                            ->locale('id')
                            ->translatedFormat('d F Y')
                    )
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
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
                SelectFilter::make('role_id')
                    ->label('Filter Role')
                    ->relationship(
                        'role',
                        'name',
                        fn($query) =>
                        $query->whereIn('name', ['marketing', 'sales', 'production'])
                    )
                    ->preload()
                    ->searchable()
                    ->placeholder('Semua Role'),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make()
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where('id', '!=', Auth::id());
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
            'index' => Pages\ListAkuns::route('/'),
            'create' => Pages\CreateAkun::route('/create'),
            'edit' => Pages\EditAkun::route('/{record}/edit'),
        ];
    }
}
