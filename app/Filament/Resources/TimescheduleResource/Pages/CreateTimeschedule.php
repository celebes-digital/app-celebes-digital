<?php

namespace App\Filament\Resources\TimescheduleResource\Pages;

use App\Filament\Resources\TimescheduleResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateTimeschedule extends CreateRecord
{
    protected static string $resource = TimescheduleResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
