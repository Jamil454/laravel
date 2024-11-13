<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    @foreach($posts as $post)

    <p>{{$post->id}}: {{$post->name}} <a href="{{route('show', $post->id)}}" >Details</a></p>

    @endforeach
</body>
</html>