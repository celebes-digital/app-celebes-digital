<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ChanelResource\Pages;
use App\Models\Chanel;
use Carbon\Carbon;
use Filament\Forms;
use Filament\Forms\Components\Section;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ChanelResource extends Resource
{
    protected static ?string $model = Chanel::class;

    protected static ?string $navigationGroup = 'Marketing';

    protected static ?string $navigationIcon = 'heroicon-o-link';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make([
                    Forms\Components\TextInput::make('chanel')
                        ->label('Nama chanel')
                        ->required()
                        ->maxLength(255),

                    Forms\Components\TextInput::make('name')
                        ->label('Nama akun')
                        ->required()
                        ->maxLength(255),

                    Forms\Components\TextInput::make('link')
                        ->label('Link akun')
                        ->required()
                        ->maxLength(255)
                        ->columnSpan(2),

                    Forms\Components\RichEditor::make('description')
                        ->required()
                        ->columnSpanFull(),
                ])->columns(2)
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('chanel')
                    ->label('Nama chanel'),
                Tables\Columns\TextColumn::make('name')
                    ->label('Nama akun'),
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
            'index' => Pages\ListChanels::route('/'),
            'create' => Pages\CreateChanel::route('/create'),
            'edit' => Pages\EditChanel::route('/{record}/edit'),
        ];
    }
}
