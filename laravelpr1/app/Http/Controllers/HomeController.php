<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
   function index(){
    $data = ['title'=> "Home Page", 'content'=>'Lorem Ipsum'];
    $data['fruits'] = ["Mango", "Orange", "Apple", "Banana", "Grape",];

        return view('home', $data);
   }
   function about(){
    return view('about');
}
function contact(){
    return view('contact');
}
   
}
