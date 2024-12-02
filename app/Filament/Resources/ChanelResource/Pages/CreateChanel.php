<?php

namespace App\Filament\Resources\ChanelResource\Pages;

use App\Filament\Resources\ChanelResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateChanel extends CreateRecord
{
    protected static string $resource = ChanelResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
