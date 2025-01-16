<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});



Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('travelling/about{id}', [App\Http\Controllers\Travelling\TravellingController::class, 'about'])->name('travelling.about');

Route::get('travelling/reservation/{id}', [App\Http\Controllers\Travelling\TravellingController::class, 'makeReservations'])->name('travelling.reservation');

Route::get('travelling/reservation/{id}', [App\Http\Controllers\Travelling\TravellingController::class, 'storeReservations'])->name('travelling.reservation.store');
