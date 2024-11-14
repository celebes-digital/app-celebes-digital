<?php

namespace App\Filament\Resources\WarriorsResource\Pages;

use App\Filament\Resources\WarriorsResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListWarriors extends ListRecords
{
    protected static string $resource = WarriorsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
