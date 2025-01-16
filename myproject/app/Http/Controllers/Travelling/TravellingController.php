<?php

namespace App\Http\Controllers\Travelling;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\City\City;
use App\Models\Country\Country;
use App\Models\Reservation\Reservation;

class TravellingController extends Controller
{
   public function about($id){
    $cities = City::select()->orderBy('id', 'desc')->take(5)->where('country_id', $id)->get();

    $country = Country::find($id);
    $citiesCount =  City::select()->where('country_id', $id)->count();
    return view('travelling.about', compact('cities', 'country', 'citiesCount'));
   }

   
   public function makeReservations($id){
   

    $city = City::find($id);
   
    return view('travelling.reservation', compact('city'));
   }

   public function storeReservations(Request $request, $id){
   

     $city = City::find($id);

     if($request->check_in_date>date("Y-m-d")){
        $totalPrice = (int)$city->price * (int)$request->num_guests;
        $storeReservations = Reservation::create([
            'name'=>$request->name,
            'phone_number'=>$request->phone_number,
            'num_guests'=>$request->num_guests,
            'check_in_date'=>$request->check_in_date,
            'destination'=>$request->destination,
            'price'=> $totalPrice,
            'user_id'=>$request->user_id,
            
     ]);

      if($storeReservations){

        // $price = Session::put('price', $city->price * $request->num_guests);
        // $newPrice = Session::get($price);
        echo "Reservation is made successfully"; 
        }
   
    }else{
        echo "Invalid date, you need to choose a date in the future";
    }
     
    return view('travelling.reservation', compact('city'));
   }

   
}
