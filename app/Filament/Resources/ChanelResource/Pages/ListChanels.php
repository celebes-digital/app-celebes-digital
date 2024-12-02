<?php

namespace App\Filament\Resources\ChanelResource\Pages;

use App\Filament\Resources\ChanelResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListChanels extends ListRecords
{
    protected static string $resource = ChanelResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
