<?php

namespace Database\Seeders;

use App\Models\Category;
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
                'name' => 'admin',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'marketing',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'sales',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'production',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'cto',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);

        // Category::insert([
        //     [
        //         'name' => 'App Development',
        //         'created_at' => now(),
        //         'updated_at' => now()
        //     ],
        //     [
        //         'name' => 'UI/UX',
        //         'created_at' => now(),
        //         'updated_at' => now(),
        //     ],
        //     [
        //         'name' => 'Website Development',
        //         'created_at' => now(),
        //         'updated_at' => now()
        //     ],
        //     [
        //         'name' => 'Software As A Service',
        //         'created_at' => now(),
        //         'updated_at' => now()
        //     ]
        // ]);

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
                'role_id' => '5',
                'name' => 'CTO',
                'email' => 'cto@gmail.com',
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
