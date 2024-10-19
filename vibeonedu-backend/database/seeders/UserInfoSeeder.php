<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\UserInfo;
use Faker\Factory as Faker;

class UserInfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $genders = ['Male', 'Female'];
        $faker = Faker::create();

        for($i = 0; $i < 20; $i++){
            UserInfo::create([
                'user_id' => rand(1, 20),
                'city_id' => rand(1, 10),
                'phone' => rand(1111111111, 9999999999),
                'gender' => array_rand($genders, 1),
                'birth_date' => $faker->dateTimeBetween('1970-01-01', '2024-12-31')->format('Y-m-d'),
                'img_path' => 'https://picsum.photos/id' . rand(1,1000) . '/200/300',
                'study_time' => rand(1, 60) //minutes per day
            ]);
        }
    }
}
