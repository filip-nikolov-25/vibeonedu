<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Course;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class UserEvaluationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user = User::all()->random();
        $course = Course::all()->random();
        $grades = ['Одличен', 'Добар', 'Среден', 'Лош'];
        return [
            'user_id' => $user->id,
            'course_id' => $course->id,
            'recommendation' => $this->faker->boolean(),
            'grade' => $this->faker->randomElement($grades),
            'message' => $this->faker->text(),
        ];
    }
}
