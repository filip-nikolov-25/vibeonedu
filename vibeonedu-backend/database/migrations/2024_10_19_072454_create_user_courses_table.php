<?php

use App\Models\Course;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_courses', function (Blueprint $table) {
            $table->id();
            // Foreign key to the users table
            $table->foreignIdFor(User::class)->constrained()->onDelete('cascade');
            // Foreign key to the courses table
            $table->foreignIdFor(Course::class)->constrained()->onDelete('cascade');
            // Track when the user starts the course
            $table->dateTime('started_at')->nullable();
            // Track when the user completes the course
            $table->dateTime('completed_at')->nullable();
            // Automatically manage created_at and updated_at columns
            $table->timestamps();

            // Optionally, create indexes for optimizing queries
            $table->index(['user_id', 'course_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_courses');
    }
};
