@extends('backend.layouts.app')

@section('css')
<!-- Favicon -->
<link rel="shortcut icon" href="favicon.ico">
<link rel="icon" href="favicon.ico" type="image/x-icon">
<link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="http://www.datatables.net/rss.xml">
<!-- Data table CSS -->
<link href="{{asset('vendors/bower_components/datatables/media/css/jquery.dataTables.min.css')}}" rel="stylesheet"
    type="text/css" />

<!-- Custom CSS -->
<link href="{{asset('dist/css/style.css')}}" rel="stylesheet" type="text/css">

@endsection

@section('content')

<div class="container-fluid">

    <!-- Title -->
    <div class="row heading-bg bg-green">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h5 class="txt-light">Export</h5>
        </div>
        <!-- Breadcrumb -->
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <ol class="breadcrumb">
                <li><a href="index.html">Dashboard</a></li>
                <li><a href="#"><span>table</span></a></li>
                <li class="active"><span>Export</span></li>
            </ol>
        </div>
        <!-- /Breadcrumb -->
    </div>
    <!-- /Title -->

    <!-- Row -->
    <div class="row">
        <div class="col-sm-12">
            <div class="panel panel-default card-view">
                <div class="panel-heading">
                    <div class="pull-left">

                        <!-- Create, Edit, Delete massage -->
                        @if(session('msg'))
                        <div class="alert alert-success">{{session('msg')}}</div>
                        @elseif(session('dlt'))
                        <div class="alert alert-danger">{{session('dlt')}}</div>
                        @elseif(session('upt'))
                        <div class="alert alert-info">{{session('upt')}}</div>
                        @endif

                        <h6 class="panel-title txt-dark">Export</h6>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="panel-wrapper collapse in">
                    <div class="panel-body">
                        <div class="table-wrap">
                            <div class="table-responsive">
                                <a href="{{route('doctor.create')}}" class="btn btn-success pull-right">Add new</a>
                                <table id="example" class="table table-hover display  pb-30">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Doctor Name</th>
                                            <th>Specialist</th>
                                            <th>Photo</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tfoot>
                                        <tr>
                                            <th>ID</th>
                                            <th>Doctor Name</th>
                                            <th>Specialist</th>
                                            <th>Photo</th>
                                            <th style="width: 300px;">Action</th>
                                        </tr>
                                    </tfoot>

                                    <tbody>
                                        @foreach ($items as $item)
                                        <tr>
                                            <td>{{$loop->iteration}}</td>
                                            <td>{{$item->name}}</td>
                                            <td>{{$item->specialist->name}}</td>
                                            <td><img src="{{asset($item->photo)}}" alt="" width="100"></td>
                                            <td>


                                                <form action="{{route('doctor.destroy', $item->id)}}" method="post">
                                                    @csrf
                                                    @method('DELETE')

                                                    <a href="{{route('doctor.edit', $item->id)}}"
                                                        class="btn btn-sm btn-success btn-anim"><i
                                                            class="fa fa-pencil-square-o"></i><span
                                                            class="btn-text">EDIT</span></a>
                                                    |
                                                    <a href="{{route('doctor.show', $item->id)}}"
                                                        class="btn btn-sm btn-primary btn-anim"><i
                                                            class="fa fa-sign-out"></i><span
                                                            class="btn-text">Show</span></a>
                                                    |
                                                    <button name="submit" type="submit" onclick="return confirm('Sure Want Delete?')"
                                                        class="btn btn-sm btn-danger btn-anim"><i
                                                            class="fa fa-trash-o"></i><span
                                                            class="btn-text">DELETE</span></button>
                                                            
                                                </form>
                                            </td>
                                        </tr>
                                        @endforeach
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Row -->
</div>

@endsection

@section('js')
<!-- JavaScript -->

<!-- jQuery -->
<script src="{{asset('vendors/bower_components/jquery/dist/jquery.min.js')}}"></script>

<!-- Bootstrap Core JavaScript -->
<script src="{{asset('vendors/bower_components/bootstrap/dist/js/bootstrap.min.js')}}"></script>

<!-- Data table JavaScript -->
<script src="{{asset('vendors/bower_components/datatables/media/js/jquery.dataTables.min.js')}}"></script>
<script src="{{asset('vendors/bower_components/datatables.net-buttons/js/dataTables.buttons.min.js')}}"></script>
<script src="{{asset('vendors/bower_components/datatables.net-buttons/js/buttons.flash.min.js')}}"></script>
<script src="{{asset('vendors/bower_components/jszip/dist/jszip.min.js')}}"></script>
<script src="{{asset('vendors/bower_components/pdfmake/build/pdfmake.min.js')}}"></script>
<script src="{{asset('vendors/bower_components/pdfmake/build/vfs_fonts.js')}}"></script>

<script src="{{asset('vendors/bower_components/datatables.net-buttons/js/buttons.html5.min.js')}}"></script>
<script src="{{asset('vendors/bower_components/datatables.net-buttons/js/buttons.print.min.js')}}"></script>
<script src="{{asset('dist/js/export-table-data.js')}}"></script>
<!-- Slimscroll JavaScript -->
<script src="{{asset('dist/js/jquery.slimscroll.js')}}"></script>

<!-- Fancy Dropdown JS -->
<script src="{{asset('dist/js/dropdown-bootstrap-extended.js')}}"></script>
<!-- Init JavaScript -->
<script src="{{asset('dist/js/init.js')}}"></script>

@endsection