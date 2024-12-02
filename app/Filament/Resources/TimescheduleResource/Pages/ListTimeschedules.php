<?php

namespace App\Filament\Resources\TimescheduleResource\Pages;

use App\Filament\Resources\TimescheduleResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListTimeschedules extends ListRecords
{
    protected static string $resource = TimescheduleResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
