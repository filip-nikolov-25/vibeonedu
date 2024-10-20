<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\FunFactController;
use App\Http\Controllers\ModuleController;
use App\Http\Controllers\CertificateController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\BadgeController;
use App\Http\Controllers\UserBadgeController;
use App\Http\Controllers\UserController;
use App\Models\User;

Route::get('/badges/{id}', [BadgeController::class, 'show']); // Show a specific badge
Route::get('/newCertificate/{userId}/{courseId}', [CertificateController::class, 'store']);
Route::get('/userBadges/{id}', [UserBadgeController::class, 'index']); // Show all badges for a specific user
Route::get('/registrations/count', [UserController::class, 'userCount']); // Show number of registrations
Route::get('/users/{id}/stats', [UserController::class, 'userStats']); // Show stats for a specific user
Route::get('/course/{id}/lectures', [CourseController::class, 'courseLectures']); // Show number of lectures for a specific course

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/courses', [CourseController::class, 'index']);  // Show all courses
Route::get('/courses/{course}', [CourseController::class, 'show']);  // Show a specific course by ID
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::get('/modules', [ModuleController::class, 'index']);

Route::get('/funfacts', [FunfactController::class, 'index']);


//Courses APIS
Route::get('/individualcourses', [CourseController::class, 'individualCourses']);
Route::get('/businesscourses', [CourseController::class, 'businessCourses']);

Route::get('/getuser/{id}', [\App\Http\Controllers\UserController::class, 'show']);
//Route::post()
