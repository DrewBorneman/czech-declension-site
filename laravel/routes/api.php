<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\ResumeController;
use App\Http\Controllers\SiteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/home', [HomeController::class, 'get']);
Route::post('/home/post', [HomeController::class, 'post']);

Route::get('/contact', [ContactController::class, 'get']);
Route::post('/contact/post', [ContactController::class, 'post']);

Route::get('/resume', [ResumeController::class, 'get']);
Route::post('/resume/post', [ResumeController::class, 'post']);

Route::get('/projects', [ProjectsController::class, 'get']);
Route::post('/projects/post', [ProjectsController::class, 'post']);

Route::get('/site', [SiteController::class, 'get']);
Route::post('/site/post', [SiteController::class, 'post']);
