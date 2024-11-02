<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Edit</title>
</head>

<body>
    <h3>Student Update Form</h3>

    <form action="{{route('student.update',$student->id)}}" method="post">
        @csrf
        <input type="text" name="name" placeholder="Enter Your Name" value="{{$student->name}}"> <br>
        <input type="text" name="email"placeholder="Enter Your email" value="{{$student->email}}"> <br>
        <input type="text" name="phone"placeholder="Enter Your Phone" value="{{$student->phone}}"> <br>
        <input type="submit" name="update" value="UPDATE"> <br>

    </form>
   
</body>

</html>