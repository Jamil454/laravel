<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
   public function index(){
    return view('userDashboard');
   }

   public function adminhome(){
    return view('adminDashboard');
   }

   public function managerhome(){
    return view('managerDashboard');
   }
}
