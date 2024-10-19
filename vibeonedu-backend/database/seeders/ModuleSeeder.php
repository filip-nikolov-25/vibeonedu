<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Module;

class ModuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Module::create(['name' => 'Programming Basics', 'description' => 'Introductory programming module.']);
        Module::create(['name' => 'Web Development', 'description' => 'Web Development using modern frameworks.']);
        Module::create(['name' => 'Database Design', 'description' => 'Database Design module.']);

    }
}
