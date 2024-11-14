<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TestimonialsResource\Pages;
use App\Filament\Resources\TestimonialsResource\RelationManagers;
use App\Models\Testimonials;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\DeleteAction;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TestimonialsResource extends Resource
{
    protected static ?string $model = Testimonials::class;

    protected static ?string $navigationIcon = 'heroicon-o-inbox';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                FileUpload::make('image')
                    ->name('Avatar Image')
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
                    ->rows(10)
                    ->columnSpan(2)
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
                EditAction::make(),
                DeleteAction::make()
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
