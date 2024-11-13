<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        Role::insert([
            [
                'name' => 'superadmin'
            ],
            [
                'name' => 'marketing'
            ],
            [
                'name' => 'sales'
            ],
            [
                'name' => 'production'
            ]
        ]);

        $users = [
            [
                'role_id' => '1',
                'name' => 'admin',
                'email' => 'admin@gmail.com',
                'password' => '123123',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'role_id' => '2',
                'name' => 'marketing',
                'email' => 'marketing@gmail.com',
                'password' => '123123',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'role_id' => '3',
                'name' => 'sales',
                'email' => 'sales@gmail.com',
                'password' => '123123',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'role_id' => '4',
                'name' => 'production',
                'email' => 'production@gmail.com',
                'password' => '123123',
                'created_at' => now(),
                'updated_at' => now()
            ]
        ];

        foreach ($users as $user) {
            User::create($user);
        }
    }
}
