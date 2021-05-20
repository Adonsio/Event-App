<?php

namespace Tests\Feature;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Passport\Passport;
use Laravel\Passport\Client;
use Tests\TestCase;


class GetEventsTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function tmp_test_events_can_be_retrieved()
    {
        $user = User::factory()->create();

        $user = Passport::actingAs($user);

        $this->actingAs($user)->get('/api/events')->assertStatus(200);

    }
}
