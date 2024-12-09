<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationGroup = 'Production';

    protected static ?string $navigationIcon = 'heroicon-o-shopping-bag';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make([
                    Forms\Components\FileUpload::make('image')
                        ->image()
                        ->directory('product')
                        ->required()
                        ->optimize('webp')
                        ->columnSpanFull(),

                    Forms\Components\TextInput::make('name')
                        ->label('Nama produk')
                        ->required()
                        ->maxLength(255)
                        ->live(onBlur: true)
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

                    Forms\Components\Select::make('categories')
                        ->relationship('categories', 'name')
                        ->multiple()
                        ->preload()
                        ->required(),

                    Forms\Components\FileUpload::make('screenshots')
                        ->columnSpan(2)
                        ->image()
                        ->optimize('webp')
                        ->multiple()
                        ->directory('product/screenshots')
                        ->required(),

                    Forms\Components\Textarea::make('description')
                        ->required()
                        ->columnSpanFull(),

                    Forms\Components\RichEditor::make('detail')
                        ->label('Detail produk')
                        ->required()
                        ->columnSpanFull(),
                ])->columns(2)
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image')->height('100px'),

                Tables\Columns\TextColumn::make('name')
                    ->searchable(),

                Tables\Columns\TextColumn::make('categories.name')
                    ->badge()
                    ->separator(','),

                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),

                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('category')
                    ->relationship('categories', 'name')
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
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}
