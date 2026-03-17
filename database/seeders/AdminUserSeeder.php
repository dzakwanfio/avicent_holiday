<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'admin@avicent.com'],
            [
                'name' => 'Super Admin Avicent',
                'password' => Hash::make('password123'),
                'email_verified_at' => now(),
            ]
        );
    }
}
