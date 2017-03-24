<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class TodosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
            $faker = Faker::create();
     
    foreach (range(1,10) as $index) {
        $now = date('Y-m-d H:i:s', strtotime('now'));
        DB::table('todos')->insert([
            'name' => $faker->word,
            'description' => $faker->sentence
        ]);
    }
    }
}
