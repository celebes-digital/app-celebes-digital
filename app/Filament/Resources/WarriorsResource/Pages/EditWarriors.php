<?php

namespace App\Filament\Resources\WarriorsResource\Pages;

use App\Filament\Resources\WarriorsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditWarriors extends EditRecord
{
    protected static string $resource = WarriorsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
