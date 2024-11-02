<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student</title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js"></script>

    <!-- Popper JS -->
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
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
    <table class="table table-striped table-active">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>phone</th>
            <th>Action</th>
            
        </tr>

        @foreach($students as $student)
        <tr>
            <td>{{$student->id}}</td>
            <td>{{$student->name}}</td>
            <td>{{$student->email}}</td>
            <td>{{$student->phone}}</td>

            <td>
                <a class="btn btn-success" href="{{route('student.edit',$student->id)}}">Edit</a> |
                <form action="{{route('student.destroy', $student->id)}}" method="POST">
                    
                    @csrf
                    
                    <input class="btn btn-danger" type="submit" name="delete" value="DELETE">
                </form>
            </td>
        </tr>
        @endforeach

    </table>
</body>
</html>