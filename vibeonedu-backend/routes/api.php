<?php

use App\Http\Controllers\FunFactController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CourseController;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\BadgeController;

Route::get('/badges/{id}', [BadgeController::class, 'show']);


Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/courses', [CourseController::class, 'index']);  // Show all courses
Route::get('/courses/{course}', [CourseController::class, 'show']);  // Show a specific course by ID
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::get('/funfacts', [FunfactController::class, 'index']);

