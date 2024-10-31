<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\StudentController;
use App\Models\Student;
use Illuminate\Support\Facades\Route;

Route::get('/',[HomeController::class, 'index']);
Route::get('/about',[HomeController::class, 'about']);
Route::get('/contact',[HomeController::class, 'contact']);

//Student Route

Route::get('/student', [StudentController::class,'index'])-> name('Student.index');
Route::get('/student/create', [StudentController::class,'create']);
Route::post('/student/store', [StudentController::class,'store'])->name('student.store');


// Route::get('/home', function () {
//     return view('home');
// });

