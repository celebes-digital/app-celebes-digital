<?php

namespace App\Filament\Resources;

use App\Filament\Resources\KontenResource\Pages;
use App\Models\Konten;
use App\Models\SocialMedia;
use Carbon\Carbon;
use Filament\Forms;
use Filament\Forms\Components\Section;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class KontenResource extends Resource
{
    protected static ?string $model = Konten::class;

    protected static ?string $navigationGroup = 'Marketing';

    protected static ?string $navigationIcon = 'heroicon-o-folder';

    public static function getPluralLabel(): string
    {
        return 'Konten';
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make([
                    Forms\Components\FileUpload::make('thumbnail')
                        ->image()
                        ->directory('konten/thumbnails')
                        ->required()
                        ->optimize('webp')
                        ->columnSpanFull(),

                    Forms\Components\TextInput::make('link')
                        ->required()
                        ->maxLength(255)
                        ->reactive()
                        ->afterStateUpdated(function ($state, callable $set, callable $get) {
                            $socialMedias = SocialMedia::all();

                            $normalizedState = strtolower($state);

                            $parsedUrl = parse_url($normalizedState, PHP_URL_HOST);

                            if ($parsedUrl) {
                                foreach ($socialMedias as $socialMedia) {
                                    $pattern = strtolower($socialMedia->name) . '.com';

                                    if (stripos($parsedUrl, $pattern) !== false) {
                                        $set('social_media_id', $socialMedia->id);
                                        return;
                                    }
                                }
                            }
                        }),

                    Forms\Components\Select::make('social_media_id')
                        ->relationship('socialMedia', 'name')
                        ->preload()
                        ->required(),

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
                Tables\Columns\ImageColumn::make('thumbnail')
                    ->height('100px'),
                Tables\Columns\TextColumn::make('link')
                    ->searchable(),
                Tables\Columns\TextColumn::make('socialMedia.name')
                    ->badge(),
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
                Tables\Filters\SelectFilter::make('socialMedia')
                    ->relationship('socialMedia', 'name')
                    ->multiple()
                    ->preload()
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
            'index' => Pages\ListKontens::route('/'),
            'create' => Pages\CreateKonten::route('/create'),
            'edit' => Pages\EditKonten::route('/{record}/edit'),
        ];
    }
}
