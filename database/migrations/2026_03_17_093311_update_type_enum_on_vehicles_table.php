<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        DB::statement("ALTER TABLE vehicles MODIFY type ENUM('bus', 'travel', 'luxury') DEFAULT 'bus'");
    }

    public function down(): void
    {
        DB::statement("ALTER TABLE vehicles MODIFY type ENUM('bus', 'travel') DEFAULT 'bus'");
    }
};