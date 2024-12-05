<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PortofolioResource\Pages;
use App\Models\Portofolio;
use Carbon\Carbon;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Section;
use Filament\Resources\Resource;
use Filament\Tables;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class PortofolioResource extends Resource
{
    protected static ?string $navigationGroup = 'Admin';

    protected static ?string $model = Portofolio::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function canAccess(): bool
    {
        return Auth::user()->role->name === 'admin';
    }

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                Section::make([
                    FileUpload::make('thumbnail')
                        ->columnSpan(2)
                        ->image()
                        ->directory('portofolios/thumbnails')
                        ->optimize('webp')
                        ->required(),

                    Forms\Components\TextInput::make('name')
                        ->required()
                        ->maxLength(255)
                        ->afterStateUpdated(function (string $state, callable $set, ?Model $record) {
                            $slug = Str::slug($state);

                            $model = static::getModel();

                            $count = 1;
                            $originalSlug = $slug;

                            while ($model::query()
                                ->where('slug', $slug)
                                ->where('id', '!=', $record?->id)
                                ->exists()
                            ) {
                                $slug = $originalSlug . '-' . $count++;
                            }

                            $set('slug', $slug);
                        }),

                    Forms\Components\Hidden::make('slug')
                        ->unique(ignoreRecord: true),

                    Forms\Components\Select::make('product_id')
                        ->relationship('product', 'name')
                        ->preload()
                        ->required(),

                    Forms\Components\Select::make('client_id')
                        ->relationship('client', 'name')
                        ->preload()
                        ->required(),

                    Forms\Components\Select::make('categories')
                        ->relationship('categories', 'name')
                        ->multiple()
                        ->preload()
                        ->required(),

                    FileUpload::make('screenshots')
                        ->columnSpan(2)
                        ->image()
                        ->optimize('webp')
                        ->multiple()
                        ->directory('portofolios/screenshots')
                        ->required(),

                    Forms\Components\RichEditor::make('description')
                        ->required()
                        ->columnSpan(2),
                ])->columns(2)
            ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('thumbnail')->height('100px'),

                Tables\Columns\TextColumn::make('name')
                    ->searchable(),

                Tables\Columns\TextColumn::make('categories.name')
                    ->badge()
                    ->separator(','),

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
                Tables\Filters\SelectFilter::make('categories')
                    ->relationship('categories', 'name')
                    ->multiple()
                    ->preload(),
                Tables\Filters\SelectFilter::make('product')
                    ->relationship('product', 'name')
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

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPortofolios::route('/'),
            'create' => Pages\CreatePortofolio::route('/create'),
            'edit' => Pages\EditPortofolio::route('/{record}/edit'),
        ];
    }
}
