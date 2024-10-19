<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $fillable = ['module_id', 'name', 'description'];
    
    public function module()
    {
        return $this->belongsTo(Module::class);
    }
}
