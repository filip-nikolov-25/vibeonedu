<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Lecture;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserLecture>
 */
class UserLectureFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user = User::all()->random();
        $lecture = Lecture::all()->random();
        return [
            'user_id' => $user->id,
            'lecture_id' => $lecture->id,
            'started_at' => now(),
            'completed_at' => now(),
        ];
    }
}
