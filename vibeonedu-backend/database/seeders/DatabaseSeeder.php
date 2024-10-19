<?php

namespace Database\Seeders;

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
        $this->call([
            FunFactSeeder::class,
            RoleSeeder::class,
            UserSeeder::class,
            BadgeSeeder::class,
            ModuleSeeder::class,
            CitySeeder::class,
            UserInfoSeeder::class,
            CourseSeeder::class,
            UserCourseSeeder::class,
            LectureSeeder::class,
            UserBadgeSeeder::class,
            UserLectureSeeder::class
        ]);

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
    }
}
