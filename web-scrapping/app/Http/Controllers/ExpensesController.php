<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;

use App\Models\Expenses;

class ExpensesController extends Controller {
   public function index () {
      $results = Expenses::get();

      return response()->json($results);
   } 
}
