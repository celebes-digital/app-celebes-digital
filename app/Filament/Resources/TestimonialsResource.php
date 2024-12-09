<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TestimonialsResource\Pages;
use App\Models\Testimonials;
use Carbon\Carbon;
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
use Illuminate\Support\Facades\Auth;

class TestimonialsResource extends Resource
{
    protected static ?string $navigationGroup = 'Admin';

    protected static ?string $model = Testimonials::class;

    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-bottom-center-text';

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
                        ->label('Avatar Image')
                        ->image()
                        ->avatar()
                        ->optimize('webp')
                        ->directory('testimonial')
                        ->previewable(true)
                        ->columnSpan(2)
                        ->required(),

                    TextInput::make('fullname')
                        ->required()
                        ->placeholder('Nama lengkap client')
                        ->maxLength(255),

                    TextInput::make('company')
                        ->label('Nama perusahaan')
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
                TextColumn::make('company')->searchable(),
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
