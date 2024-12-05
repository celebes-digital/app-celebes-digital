<?php

namespace App\Filament\Resources;

use App\Filament\Resources\WarriorsResource\Pages;
use App\Models\Warriors;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Support\Facades\Auth;

class WarriorsResource extends Resource
{
    protected static ?string $navigationGroup = 'Admin';

    protected static ?string $model = Warriors::class;

    protected static ?string $navigationIcon = 'heroicon-o-user-group';

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
                    FileUpload::make('image')
                        ->label('Warrior Image')
                        ->optimize('webp')
                        ->directory('warrior-image')
                        ->previewable(true)
                        ->columnSpan(2)
                        ->required(),

                    TextInput::make('fullname')
                        ->required()
                        ->placeholder('Nama lengkap karyawan')
                        ->maxLength(255),

                    Select::make('profession')
                        ->placeholder('Profesi karyawan')
                        ->required()
                        ->options([
                            'chief executive officer' => 'Chief Executive Officer',
                            'chief technology officer' => 'Chief Technology Officer',
                            'presiden commisioner' => 'Presiden Commisioner',
                            'finance director' => 'Finance Director',
                            'marketing' => 'Marketing',
                            'sales' => 'Sales',
                            'production' => 'Production'
                        ]),

                    TextInput::make('instagram')
                        ->prefix('https://instagram.com/')
                        ->placeholder('Username Instagram')
                        ->dehydrateStateUsing(fn($state) => 'https://instagram.com/' . ltrim($state, '/'))
                        ->formatStateUsing(function ($state) {
                            if (!$state) return null;
                            return str_replace('https://instagram.com/', '', $state);
                        })
                        ->required(),

                    TextInput::make('linkedin')
                        ->prefix('https://linkedin.com/')
                        ->placeholder('Username Linkedin')
                        ->dehydrateStateUsing(fn($state) => 'https://linkedin.com/' . ltrim($state, '/'))
                        ->formatStateUsing(function ($state) {
                            if (!$state) return null;
                            return str_replace('https://linkedin.com/', '', $state);
                        })
                        ->required(),
                ])->columns(2)
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image')->height('100px'),
                TextColumn::make('fullname')->searchable()->sortable(),
                TextColumn::make('profession'),
            ])
            ->filters([
                SelectFilter::make('profession')
                    ->label('Filter Profession')
                    ->options([
                        'chief executive officer' => 'Chief Executive Officer',
                        'chief technology officer' => 'Chief Technology Officer',
                        'presiden commisioner' => 'Presiden Commisioner',
                        'finance director' => 'Finance Director',
                        'marketing' => 'Marketing',
                        'sales' => 'Sales',
                        'production' => 'Production'
                    ])
                    ->preload()
                    ->searchable()
                    ->placeholder('Semua Profesi'),
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

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListWarriors::route('/'),
            'create' => Pages\CreateWarriors::route('/create'),
            'edit' => Pages\EditWarriors::route('/{record}/edit'),
        ];
    }
}
