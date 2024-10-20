<?php

namespace App\Http\Controllers;

require './vendor/autoload.php';
 
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Imagick\Driver;
use Intervention\Image\Typography\FontFactory;

use App\Models\Certificate;
use App\Models\Badge;
use App\Http\Requests\StoreCertificatesRequest;
use App\Http\Requests\UpdateCertificatesRequest;
use App\Models\User;

class CertificateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(StoreCertificatesRequest $request)
    {
        // $userId = $request->input('user_id');
        $user = User::find($request->input('user_id'));
        $courseId = $request->input('course_id');
        if($courseId <= 10){
            $image = ImageManager::imagick()->read('Assets/Certificats/Blue Certificate.png'); //Generating image from public foler without data
            $image->text($user->name . $user->surname, 120, 100, function (FontFactory $font) {
                $font->filename('./fonts/comic-sans.ttf');
                $font->size(70);
                $font->color('fff');
                $font->stroke('ff5500', 2);
                $font->align('center');
                $font->valign('middle');
                $font->lineHeight(1.6);
                $font->angle(10);
                $font->wrap(250);
            });
        // $text = $request->input('name');
        } else {
            $image = ImageManager::imagick()->read('Assets/Certificats/Orange Certificate.png'); //Generating image from public foler without data
            $image->text($user->name . $user->surname, 120, 100, function (FontFactory $font) {
                $font->filename('./fonts/comic-sans.ttf');
                $font->size(70);
                $font->color('fff');
                $font->stroke('ff5500', 2);
                $font->align('center');
                $font->valign('middle');
                $font->lineHeight(1.6);
                $font->angle(10);
                $font->wrap(250);
            });
        }

        dd($image);

    }

    /**
     * Display the specified resource.
     */
    public function show(Certificate $certificates)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Certificate $certificates)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCertificatesRequest $request, Certificate $certificates)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Certificate $certificates)
    {
        //
    }
}
