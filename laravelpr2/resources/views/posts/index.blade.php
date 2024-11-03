@extends ('layout')

@section('content')

@if(session('success'))
<div class="alert alert-success"><b>{{session('success')}}</b></div>
@endif
<div class="row">
    <div class="col-lg-12">
        <h1>Post Lists</h1>
        <a href="{{route('posts.create')}}" class="btn btn-success float-right">Add New Post</a>
        <br><br>
        <table class="table table-striped">
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>Details</th>
                <th>Image</th>
                <th>Action</th>
            </tr>

            @foreach($posts as $post)

            <tr>
                <td>{{$i++}}</td>
                <td>{{$post->name}}</td>
                <td>{{$post->detail}}</td>
                <td><img src="/images/{{$post->image}}" width="100"></td>
                <td>Edit |
                    

                    <form action="{{route('posts.destroy',$post->id)}}" method="post">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-danger">Delete</button>

                    </form>
        
      </td>
    </tr>
    @endforeach
  </table>
    </div>
   
</div>
@endsection