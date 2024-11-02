<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;


class StudentController extends Controller
{
    function index()
    {
        $students = Student::all();
        //dd($students);

        return view('student/index', ['students' => $students]);
    }
    function create()
    {
        return view('student/create');
    }
    function store(Request $request)
    {
        $student = new Student();
        $student['name'] = $request->input('name');
        $student['email'] = $request->input('email');
        $student['phone'] = $request->input('phone');
        $student->save();
        return redirect(route('Student.index'))->with('msg', 'Successfully Added');
    }


    function destroy(Request $request)
    {
        $student = Student::find($request->id);
        $student->delete();
        return redirect(route('Student.index'))->with('msg', 'Successfully Deleted');
       
    }
    function edit(Request $request){
        $student = Student::find($request->id);
        return view('student/edit', ['student'=>$student]);
    }
    function update(Request $request){
        $student = Student::find($request->id);
        $student['name'] =$request->input('name');
        $student['email'] =$request->input('email');
        $student['phone'] =$request->input('phone');
        $student->update();
        return redirect(route('Student.index'))->with('msg', 'Successfully Updated');


    }
}
