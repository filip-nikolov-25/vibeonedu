<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\UserCourse; // To track user course progress
use App\Models\UserLecture; // To track user lecture progress
use App\Models\Lecture; // To track the lectures in a course
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request; // For handling requests
use App\Http\Requests\StoreCourseRequest; // For validating the store request
use App\Http\Requests\UpdateCourseRequest; 

class CourseController extends Controller
{
    /**
     * Display all business courses (module_id = 2).
     */
    public function businessCourses() {
        $businessCourses = Course::where('module_id', 2)->get();
        return response()->json($businessCourses);
    }

    /**
     * Display all individual courses (module_id = 1).
     */
    public function individualCourses() {
        $individualCourses = Course::where('module_id', 1)->get();
        return response()->json($individualCourses);
    }

    /**
     * Display all courses.
     */
    public function index()
    {
        return response()->json(Course::all());
    }

    /**
     * Display a specific course with its module.
     */
    public function show(Course $course)
    {
        return response()->json($course->load('module'));
    }

    /**
     * Mark a course as completed for the logged-in user.
     */
    public function completeCourse($courseId)
    {
        $user = Auth::user();

        // Check if the course exists
        $course = Course::findOrFail($courseId);

        // Update or create a record in the user_courses table
        UserCourse::updateOrCreate(
            [
                'user_id' => $user->id,
                'course_id' => $course->id,
            ],
            [
                'completed_at' => now(),
            ]
        );

        return response()->json(['message' => 'Course marked as completed.']);
    }

    /**
     * Get how many lectures are left for the user in the course.
     */
    public function getLecturesLeft($courseId)
    {
        $user = Auth::user(); // Get the logged-in user

        // Get total lectures for the course
        $totalLectures = Lecture::where('course_id', $courseId)->count();

        // Get the number of lectures the user has completed for this course
        $completedLectures = UserLecture::where('user_id', $user->id)
            ->whereHas('lecture', function($query) use ($courseId) {
                $query->where('course_id', $courseId);
            })
            ->whereNotNull('completed_at') // checking if the lecture has been completed
            ->count();

        // Calculate lectures left
        $lecturesLeft = $totalLectures - $completedLectures;

        // Return the result as JSON
        return response()->json([
            'total_lectures' => $totalLectures,
            'completed_lectures' => $completedLectures,
            'lectures_left' => $lecturesLeft
        ]);
    }

    /**
     * Store a newly created course in storage.
     */
    public function store(StoreCourseRequest $request)
    {
        $course = Course::create($request->validated());
        return response()->json($course, 201); // Return the created course with a 201 status code
    }

    /**
     * Update the specified course in storage.
     */
    public function update(UpdateCourseRequest $request, Course $course)
    {
        $course->update($request->validated());
        return response()->json($course);
    }

    /**
     * Remove the specified course from storage.
     */
    public function destroy(Course $course)
    {
        $course->delete();
        return response()->json(['message' => 'Course deleted successfully']);
    }
}
