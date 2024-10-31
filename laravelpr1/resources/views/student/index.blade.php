<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student</title>
    <style>
        .alert {
            color: green;
        }
    </style>
</head>

<body>
    @if (session('msg'))
    <div class="alert">{{ session('msg') }}</div>

     @endif
        <h1>Student List</h1>
        <ol>
        @foreach($students as $item)
        <li>
            <b>Name:</b>{{$item->name}}<br>
            <b>Email:</b>{{$item->email}}<br>
            <b>Phone:</b>{{$item->phone}}
        </li> <br>
        @endforeach

    </ol>
</body>

</html>