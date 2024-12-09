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

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('travelling/about{id}', [App\Http\Controllers\Travelling\TravellingController::class, 'about'])->name('travelling.about');

//booking
Route::get('travelling/reservation/{id}', [App\Http\Controllers\Travelling\TravellingController::class, 'makeReservations'])->name('travelling.reservation');

Route::post('travelling/reservation/{id}', [App\Http\Controllers\Travelling\TravellingController::class, 'storeReservations'])->name('travelling.reservation.store');

//payment

Route::get('travelling/pay', [App\Http\Controllers\Travelling\TravellingController::class, 'payWithPaypal'])->name('travelling.pay')->middleware('check.for.price');

Route::get('travelling/success', [App\Http\Controllers\Travelling\TravellingController::class, 'success'])->name('travelling.success')->middleware('check.for.price');

//contact
Route::get('travelling/deals', [App\Http\Controllers\Travelling\TravellingController::class, 'deals'])->name('travelling.deals');

//  Route::get('travelling/search-deals', [App\Http\Controllers\Travelling\TravellingController::class, 'searchDeals'])->name('travelling.deals.search');


// Route::match(['get', 'post'], 'travelling/search-deals', [TravelController::class, 'searchDeals'])->name('travelling.search-deals');

Route::get('travelling/deals/search', [TravelController::class, 'searchDeals'])->name('travelling.deals.search');


