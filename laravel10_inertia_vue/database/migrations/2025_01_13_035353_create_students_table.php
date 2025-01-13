<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('name');  //text
            $table->string('address');  // textarea
            $table->date('dob');  //date
            $table->enum('gender', ['male', 'female']);  // radio
            $table->string('district');  //dropdown
            $table->string('languages');  //checkbox
            $table->string('photo');  // file
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
