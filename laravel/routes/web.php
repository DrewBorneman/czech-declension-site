<?php

use Illuminate\Support\Facades\Route;
// if (file_exists(base_path('routes/api.php'))) {
//     require base_path('routes/api.php');
// }

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
// Route::prefix('api')->group(base_path('routes/api.php'));

if (file_exists(public_path('index.html'))) {
    // Production build only – serve the compiled Vue app
    Route::get('/{any}', function () {
        return file_get_contents(public_path('index.html'));
    })->where('any', '.*');
} else {
    // Dev mode – do nothing, Vite serves the frontend
    Route::get('/', function () {
        return 'Vue dev server running...';
    });
}
