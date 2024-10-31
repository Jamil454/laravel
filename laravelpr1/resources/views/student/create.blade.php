<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h3>Student Entry Form</h3>

    <form action="{{route('student.store')}}" method="post">
        @csrf
        <input type="text" name="name" placeholder="Enter Your Name"> <br>
        <input type="text" name="email"placeholder="Enter Your email"> <br>
        <input type="text" name="phone"placeholder="Enter Your Phone"> <br>
        <input type="submit" name="submit" value="SUBMIT"> <br>

    </form>
</body>

</html>