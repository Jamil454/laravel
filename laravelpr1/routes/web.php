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
Route::post('/student/delete/{id}', [StudentController::class,'destroy'])->name('student.destroy');
Route::get('/student/edit/{id}', [StudentController::class,'edit'])->name('student.edit');
Route::post('/student/update/{id}', [StudentController::class,'update'])->name('student.update');


// Route::get('/home', function () {
//     return view('home');
// });

