<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $items = Appointment::all();
        return view('backend.appointment.index', compact('items'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $appointment = Appointment::all();
        return view('backend.appointment.create', compact('appointments'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return view('backend.appointment.show', compact('appointment'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Appointment $appointment)
    {
        return view('backend.appointment.show', compact('appointment'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Appointment $appointment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Appointment $appointment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Appointment $appointment)
    {
        $appointment->delete();
        return redirect()->route('appointment.index')->with('msg', 'Deleted Successfully');
    }
    public function changeStatus($id){
        $record = Appointment::find($id);
        $record->status=='pending' ? $record->status='confirmed': $record->status= 'pending';
        $record->update();
        return redirect()->back();
    }
}
