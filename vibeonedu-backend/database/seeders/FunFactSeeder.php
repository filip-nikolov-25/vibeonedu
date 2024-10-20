<?php

namespace Database\Seeders;

use App\Models\FunFact;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FunFactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $funFacts = [
            [
                'name' => 'The Origins of Currency: The first known form of currency dates back to around 3000 BC in Mesopotamia, where people used barley as a medium of exchange.',
                'author' => 'Jane Doe'
            ],

            [
                'name' => 'The $1 Bill: The design of the U.S. one-dollar bill has remained largely unchanged since 1929, featuring George Washington on the front and the Great Seal of the United States on the back.',
                'author' => 'Jane Doe'
            ],

            [
                'name' => 'Debt and Happiness: Studies suggest that individuals with lower levels of debt report higher levels of happiness and life satisfaction compared to those with significant debt.',
                'author' => 'Jane Doe'
            ],

            [
                'name' => 'Inflation: The average annual inflation rate in the U.S. since 1913 has been about 3.2%, meaning the purchasing power of a dollar decreases over time.',
                'author' => 'Jane Doe'
            ],

            [
                'name' => 'Interest on Savings: Albert Einstein is famously quoted as saying, "Compound interest is the eighth wonder of the world. He who understands it earns it; he who doesn’t pays it."',
                'author' => 'Jane Doe'
            ],

            [
                'name' => ' Financial Literacy: Research shows that only about 17% of U.S. adults can correctly answer basic financial literacy questions, highlighting the need for better financial education.',
                'author' => 'Jane Doe'
            ],

            [
                'name' => 'Cost of College: The cost of college education in the U.S. has increased over 1,200% since the 1980s, outpacing inflation and wage growth significantly.',
                'author' => 'Jane Doe'
            ],

            [
                'name' => 'Credit Scores: Your credit score can be influenced by many factors, including your payment history, the length of your credit history, and your credit utilization ratio. A higher credit score can save you money on loans.',
                'author' => 'Jane Doe'
            ],

            [
                'name' => 'Debt and Happiness: Studies suggest that individuals with lower levels of debt report higher levels of happiness and life satisfaction compared to those with significant debt.',
                'author' => 'Jane Doe'
            ],

        ];

        foreach ($funFacts as $fact) {
            FunFact::create(
                [
                    'name' => $fact['name'],
                    'author' => $fact['author']
                ]);
        }
    }
}
