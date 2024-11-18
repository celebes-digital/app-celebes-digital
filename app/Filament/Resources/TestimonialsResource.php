<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TestimonialsResource\Pages;
use App\Filament\Resources\TestimonialsResource\RelationManagers;
use App\Models\Testimonials;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TestimonialsResource extends Resource
{
    protected static ?string $model = Testimonials::class;

    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-bottom-center-text';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make([
                    FileUpload::make('image')
                        ->label('Avatar Image')
                        ->image()
                        ->avatar()
                        ->directory('testimonial-image')
                        ->previewable(true)
                        ->columnSpan(2)
                        ->required(),

                    TextInput::make('fullname')
                        ->required()
                        ->columnSpan(2)
                        ->placeholder('Nama lengkap client')
                        ->maxLength(255),

                    TextInput::make('profession')
                        ->placeholder('Profesi client')
                        ->required()
                        ->maxLength(255),

                    TextInput::make('company')
                        ->required()
                        ->placeholder('Perusahaan client')
                        ->maxLength(255),

                    Textarea::make('message')
                        ->placeholder('Pesan client')
                        ->required()
                        ->rows(8)
                        ->columnSpan(2)
                ])->columns(2)
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image')->height('50px')->rounded('full'),
                TextColumn::make('fullname')->searchable()->sortable(),
                TextColumn::make('profession'),
                TextColumn::make('company')->searchable(),
            ])
            ->filters([
                //
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
            'index' => Pages\ListTestimonials::route('/'),
            'create' => Pages\CreateTestimonials::route('/create'),
            'edit' => Pages\EditTestimonials::route('/{record}/edit'),
        ];
    }
}
