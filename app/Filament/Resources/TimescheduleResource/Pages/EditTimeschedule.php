<?php

namespace App\Filament\Resources\TimescheduleResource\Pages;

use App\Filament\Resources\TimescheduleResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditTimeschedule extends EditRecord
{
    protected static string $resource = TimescheduleResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
