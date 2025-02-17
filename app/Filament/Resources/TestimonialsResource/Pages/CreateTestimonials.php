<?php

namespace App\Filament\Resources\TestimonialsResource\Pages;

use App\Filament\Resources\TestimonialsResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateTestimonials extends CreateRecord
{
    protected static string $resource = TestimonialsResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
