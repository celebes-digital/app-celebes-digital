<?php

namespace App\Filament\Resources\ItemKerjaResource\Pages;

use App\Filament\Resources\ItemKerjaResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateItemKerja extends CreateRecord
{
    protected static string $resource = ItemKerjaResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
