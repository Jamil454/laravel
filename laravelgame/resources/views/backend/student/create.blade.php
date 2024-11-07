@extends('backend.app')

@section('content')

<form action="{{route('students.store')}}" class="parsley-examples" method="post">
    @csrf
    <div class="form-group">
        <label for="Name">Name<span class="text-danger">*</span></label>
        <input type="text" name="name" parsley-trigger="change" required
            placeholder="Enter your name" class="form-control" id="userName">
    </div>
    <div class="form-group">
        <label for="emailAddress">Email address<span class="text-danger">*</span></label>
        <input type="email" name="email" parsley-trigger="change" required
            placeholder="Enter your email" class="form-control" id="emailAddress">
    </div>
    <div class="form-group">
        <label for="pass1">Phone<span class="text-danger">*</span></label>
        <input id="pass1" type="text" placeholder="Enter your phone" required
            class="form-control">
    </div>
    <div class="form-group">
        <label for="passWord2">Address <span class="text-danger">*</span></label>
        <textarea name="address" placeholder="Enter your address" id=""></textarea>
        
    </div>
   

    <div class="form-group text-right mb-0">
        <button class="btn btn-primary waves-effect waves-light mr-1" type="submit">
            Submit
        </button>
        <button type="reset" class="btn btn-light waves-effect">
            Cancel
        </button>
    </div>

</form>
@endsection