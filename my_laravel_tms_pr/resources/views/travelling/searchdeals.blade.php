@extends('layouts.app')

@section('content')
<div class="page-heading">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h4>Searching Results Here</h4>
          <h2>Amazing Prices &amp; More</h2>
        </div>
      </div>
    </div>
  </div>

  <div class="search-form">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <form id="search-form" name="gs" method="submit" role="search" action="#">
            <div class="row">
              <div class="col-lg-2">
                <h4>Sort Deals By:</h4>
              </div>
              <div class="col-lg-4">
                  <fieldset>
                      <select name="Location" class="form-select" aria-label="Default select example" id="chooseLocation" onChange="this.form.click()">
                          <option selected>Destinations</option>
                          <option type="checkbox" name="option1" value="Italy">Italy</option>
                          <option value="France">France</option>
                          <option value="Switzerland">Switzerland</option>
                          <option value="Thailand">Thailand</option>
                          <option value="Australia">Australia</option>
                          <option value="India">India</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Singapore">Singapore</option>
                      </select>
                  </fieldset>
              </div>
              <div class="col-lg-4">
                  <fieldset>
                      <select name="Price" class="form-select" aria-label="Default select example" id="choosePrice" onChange="this.form.click()">
                          <option selected>Price Range</option>
                          <option value="100">$100 - $250</option>
                          <option value="250">$250 - $500</option>
                          <option value="500">$500 - $1,000</option>
                          <option value="1000">$1,000 - $2,500</option>
                          <option value="2500+">$2,500+</option>
                      </select>
                  </fieldset>
              </div>
              <div class="col-lg-2">                        
                  <fieldset>
                      <button class="border-button">Search Results</button>
                  </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="amazing-deals">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="section-heading text-center">
            <h2 class="text-white">Best Weekly Offers In Each City</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          </div>
        </div>
        @foreach($searches as $city) 
        <div class="col-lg-6 col-sm-6">
          <div class="item">
            <div class="row">
              <div class="col-lg-6">
                <div class="image">
                  <img src="{{asset('assets/images/'.$city->image.'')}}" alt="">
                </div>
              </div>
              <div class="col-lg-6 align-self-center">
                <div class="content">
                  <span class="info">*Limited Offer Today</span>
                  <h4 class="text-black">{{$city->name}}</h4>
                  <div class="row">
                    <div class="col-6">
                      <i class="fa fa-clock"></i>
                      <span class="list">{{$city->num_days}} Days</span>
                    </div>
                    <div class="col-6">
                      <i class="fa fa-map"></i>
                      <span class="list">Daily Places</span>
                    </div>
                  </div>
                  <p>If you’re ready to explore the beautiful city of Paris, then we’ve got you covered! There’s so much to see and do in this iconic city.</p>
                  <div class="main-button">
                    <a href="{{route('travelling.reservation', $city->id)}}">Make a Reservation</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        @endforeach
       
       
      </div>
    </div>
  </div>
@endsection