<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::resource('/posts', PostController::class);
Route::get('/', [HomeController::class, 'index']);


// Route::get('/', function () {
//     return view('posts.index');
// });
