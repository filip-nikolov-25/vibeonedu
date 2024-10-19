<?php

namespace App\Http\Controllers;

use App\Models\Lecture;
use App\Models\UserLecture;
use App\Models\Course;
use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;
use Illuminate\Support\Facades\Auth;

class CourseController extends Controller
{

    public function businessCourses() {
        $businessCourses = Course::where('module_id', 2)->get();

        return response()->json($businessCourses);
    }

    public function individualCourses() {
        $individualCourses = Course::where('module_id', 1)->get();

        return response()->json($individualCourses);
    }

    /**
     * Calculate the percentage of a course completed by the logged-in user.
     */
    public function courseProgress($courseId)
    {
        // Get the logged-in user
        $user = Auth::user();

        // Find the course
        $course = Course::findOrFail($courseId);

        // Get all the lectures in this course
        $totalLectures = Lecture::where('course_id', $course->id)->count();

        // Get the number of lectures the user has completed for this course
        $completedLectures = UserLecture::where('user_id', $user->id)
                                ->where('course_id', $course->id)
                                ->where('is_completed', true) // assuming you have a 'is_completed' flag
                                ->count();

        // Avoid division by zero in case there are no lectures
        if ($totalLectures == 0) {
            return response()->json([
                'message' => 'No lectures available for this course.',
                'progress' => 0,
            ], 200);
        }

        // Calculate the percentage of completion
        $percentage = ($completedLectures / $totalLectures) * 100;

        // Return the result as a JSON response
        return response()->json([
            'course_id' => $course->id,
            'course_name' => $course->name,
            'total_lectures' => $totalLectures,
            'completed_lectures' => $completedLectures,
            'progress' => round($percentage, 2), // rounding to 2 decimal points
        ], 200);
    }


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Course::all());

    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCourseRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Course $course)
    {
        {
            return response()->json($course->load('module'));
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Course $course)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCourseRequest $request, Course $course)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        //
    }
}
