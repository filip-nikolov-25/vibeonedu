<?php

namespace Database\Seeders;

use App\Models\UserLecture;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserLectureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        UserLecture::factory()->count(10)->create();
    }
}
