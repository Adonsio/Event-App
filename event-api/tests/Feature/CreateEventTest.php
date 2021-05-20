<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Passport\Passport;
use Tests\TestCase;
use Faker;
class CreateEventTest extends TestCase
{

    use WithFaker;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_createEvent()
    {
        $this->seed();
        $payload = [
        'name' => 'Event of '. $this->faker->realText(15),
        'desc' => $this->faker->realText(120),
        'excerpt' => $this->faker->realText(30),
        'start_date' => $this->faker->date(),
        'size' => $this->faker->numberBetween(1,16),
        'user_id' => $this->faker->numberBetween(1,5),
        ];
        $user = User::factory()->create();

        $user = Passport::actingAs($user);

        $this->actingAs($user)->post('/api/events/', $payload)->assertStatus(200);
    }
}
