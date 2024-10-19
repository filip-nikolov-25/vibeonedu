<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserInfo;
use Dotenv\Validator;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function show($id){

        $user = User::find($id);
        $userInfo = UserInfo::where('user_id', $id)->get();

        $userDetails = [
            'id'=>$user->id,
            'name' => $user->name,
            'surname' => $user->surname,
            'email' => $user->email,
            'phone' => $user->phone,
            'city' => $user->city,
        ];


        return response()->json($userDetails, 200);
    }

    public function changeUserInfo(Request $request, $id) {

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'surname' => 'required',
            'email' => 'required|email',
            'city' => 'required',
            'phone' => 'required',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->name = $request->input('name');
        $user->surname = $request->input('surname');
        $user->email = $request->input('email');
        $user->city = $request->input('city');
        $user->phone = $request->input('phone');
        $user->password = $request->input('password');

        if ($request->filled('password')) {
            $user->password = bcrypt($request->input('password'));
        }

        $user->save();

        return response()->json(['message' => 'User updated successfully', 'user' => $user]);
    }

    public function userCount()
    {
        $registrations = User::count();
        return response()->json(["registrations" => $registrations]);
    }


   
}
