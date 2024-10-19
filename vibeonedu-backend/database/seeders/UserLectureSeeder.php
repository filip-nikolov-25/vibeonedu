<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\UserLecture;

class UserLectureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i=0; $i < 20; $i++) { 
            UserLecture::create([
                'user_id' => rand(1, 20),
                'lecture_id' => rand(1, 20)
            ]);
        }
    }
}
