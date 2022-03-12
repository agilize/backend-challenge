<?php

namespace Tests;

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;
use Illuminate\Http\Request;

class ResponseTest extends TestCase
{
    public function test_if_api_is_online()
    {
        $response = $this->call('GET', '/');
        $this->assertEquals(200, $response->status());
    }
}
