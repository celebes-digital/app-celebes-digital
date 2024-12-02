<?php

namespace App\Filament\Resources\WarriorsResource\Pages;

use App\Filament\Resources\WarriorsResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateWarriors extends CreateRecord
{
    protected static string $resource = WarriorsResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
