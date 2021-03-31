<?php

namespace Database\Factories;

use App\Models\Event;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class EventFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Event::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        //'name','desc','excerpt','start_date','size'
        return [
            'name' => 'Event of '. $this->faker->firstName,
            'desc' => $this->faker->realText(120),
            'excerpt' => $this->faker->realText(30),
            'start_date' => $this->faker->date(),
            'size' => $this->faker->numberBetween(1,16),
            'user_id' => $this->faker->numberBetween(1,5),
        ];
    }
}
