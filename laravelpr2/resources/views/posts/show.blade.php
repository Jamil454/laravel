@extends('layout')

@section('content')

<div class="row">
    <div class="col-lg-12">
        <h5>ID:{{$post->id}}</h5>
        <h2>{{$post->name}}</h2>
        <h2>{{$post->detail}}</h2>
        <img src="/images/{{ $post->image }}" width="500px">

    </div>

</div>

@endsection