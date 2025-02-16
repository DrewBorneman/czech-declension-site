<?php

use Illuminate\Support\Facades\Route;
if (file_exists(base_path('routes/api.php'))) {
    require base_path('routes/api.php');
}

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// 🔥 ENSURE API REQUESTS ARE NOT HANDLED HERE
Route::prefix('api')->group(base_path('routes/api.php'));

Route::middleware('web')->group(function () {
    Route::get('/{any}', function () {
        return view('index'); // Vue app entry point
    })->where('any', '^(?!api).*'); // Exclude API requests
});
