<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('timeschedules', function (Blueprint $table) {
            $table->id();
            $table->foreignId('item_kerja_id');
            $table->text('description');
            $table->boolean('is_finished')->default(false);
            $table->date('tgl_mulai');
            $table->date('tgl_selesai');
            $table->timestamps();
        });

        Schema::create('timeschedule_user', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('timeschedule_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('timeschedules');
    }
};
