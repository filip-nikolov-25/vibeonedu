<?php

use App\Http\Controllers\FunFactController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\BadgeController;
use App\Http\Controllers\UserBadgeController;
use App\Models\User;

Route::get('/badges/{id}', [BadgeController::class, 'show']);
Route::get('/userBadges/{id}', [UserBadgeController::class, 'index']);

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/funfacts', [FunfactController::class, 'index']);


