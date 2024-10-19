<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Course;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Course::create([
            'module_id' => 1, 
            'name' => 'Intro to Programming',
            'description' => 'A basic course on programming concepts and syntax.'
        ]);

        Course::create([
            'module_id' => 2, 
            'name' => 'Advanced Web Development',
            'description' => 'An advanced course on web development with modern frameworks.'
        ]);

        Course::create([
            'module_id' => 3,
            'name' => 'Database Design',
            'description' => 'Learn how to design efficient and scalable databases.'
        ]);
    }
}
