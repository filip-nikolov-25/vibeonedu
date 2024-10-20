<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lecture extends Model
{
    // Each lecture belongs to a course
    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
