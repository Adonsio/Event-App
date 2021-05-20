<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Passport\Passport;
use Tests\TestCase;

class GetUserEventsTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_user_events_can_be_retrieved()
    {
        $this->seed();

        $user = User::factory()->create();

        $user = Passport::actingAs($user);

        $this->actingAs($user)->get('/api/user_events/'.$user->id)->assertStatus(200);

    }
}
