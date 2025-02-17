<?php

namespace App\Filament\Resources\ItemKerjaResource\Pages;

use App\Filament\Resources\ItemKerjaResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditItemKerja extends EditRecord
{
    protected static string $resource = ItemKerjaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
