<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Lecture;
use App\Models\Course;

class LectureFactory extends Factory
{
    protected $model = LectureFactory::class;

    public function definition()
    {
        $course = Course::inRandomOrder()->first();

        return [
            'id' => $this->faker->unique()->randomNumber(),
            'course_id' => $course->id,
            'name' => $this->faker->sentence(),
            'description' => $this->faker->paragraph(),
            'audio_path' => $this->faker->url(),
            'duration' => $this->faker->numberBetween(1, 60),
        ];
    }
}
