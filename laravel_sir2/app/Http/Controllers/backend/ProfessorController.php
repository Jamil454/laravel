<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\Professor;
use Illuminate\Http\Request;

class ProfessorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $items = Professor::orderBy('id', 'desc')->get();
        return view('backend.professor.index', compact('items'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $professor = Professor::all();
        return view('backend.professor.create', compact('professor'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'name'=>'required | max:100 | min:5',
                // 'professor'=>'required',
                'email'=>'required | email | max:50 ',
                'password'=>'required | min:8 | confirmed ',
                'photo'=>'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'status'=>'required',
            ],
            
        );

        if ($image = $request->file('photo')) {
            $destinationPath = 'images/';
            $postImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $postImage);
            $photo = $destinationPath.$postImage;
        } else {
            $photo = 'images/nophoto.jpg';
        }

        
        $professor = new Professor;
        
        $professor->name = $request->name;
        // $professor->department_id = $request->department;
        $professor->email = $request->email;
        $professor->password = bcrypt($request->password);
        $professor->photo = $photo;
        $professor->status = $request->status;
        
        $professor->save();

        return redirect()->route('professor.index')->with('msg', "Successfully Professor Created");
    }

    /**
     * Display the specified resource.
     */
    public function show(Professor $professor)
    {
        return view('backend.professor.show', compact('professor'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Professor $professor)
    {
       
        return view('backend.professor.edit', compact('professor'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Professor $professor)
    {
        $request->validate(
            [
                'name'=>'required | max:100 | min:5',
                // 'specialist'=>'required',
                'email'=>'required | email | max:50 ',
                'photo'=>'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'status'=>'required',
            ],
            
        );

        if ($image = $request->file('photo')) {
            $destinationPath = 'images/';
            $postImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $postImage);
            $photo = $destinationPath.$postImage;
        } else {
            $photo = $professor->photo;
        }

        $professor->name = $request->name;
        // $doctor->specialist_id = $request->specialist;
        $professor->email = $request->email;
        $professor->password = $professor->password;
        $professor->photo = $photo;
        $professor->status = $request->status;
        
        $professor->update();
        return redirect()->route('professor.index')->with('msg', "Successfully Doctor Updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Professor $professor)
    {
        $professor->delete();
        return redirect()->route('professor.index')->with('msg', 'Deleted Successfully');
    }
}
