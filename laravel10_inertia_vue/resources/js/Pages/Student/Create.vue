<script setup>
import { Link, useForm } from '@inertiajs/vue3';

const stu = useForm({
    name: '',
    address: '',
    dob: '',
    gender: '',
    district: '',
    languages: [],
    photo: '',
});

const submit = ()=>{
    stu.post(route('students.store'))
}
</script>

<template>
    <div class="container">
        <Link :href="route('students.index')" class="btn btn-success">Students List</Link>
        <h1 class="display-3">Student Registration Form</h1>

        <form @submit.prevent="">

            <div class="form-group">
                <label for="">Name</label>
                <input type="text" class="form-control" v-model="stu.name" placeholder="Enter Name">
            </div>

            <div class="form-group">
                <label for="">Address</label>
                <textarea id="" placeholder="Enter Address" v-model="stu.address" class="form-control"></textarea>
            </div>

            <div class="form-group">
                <label for="">Date of Birth</label>
                <input type="date" v-model="stu.dob" class="form-control">
            </div>

            <div class="form-group">
                <label for="">Gender</label> <br>
                <input type="radio" v-model="stu.gender" value="male" class="form-control">Male
                <input type="radio" v-model="stu.gender" value="female" class="form-control">Female


            </div>

            <div class="form-group">
                <label for="">District</label>
                <select id="" class="form-control" v-model="stu.district">
                    <option value="">Select One</option>
                    <option value="1">Dhaka</option>
                    <option value="2">Faridpur</option>
                    <option value="3">Khulna</option>
                    <option value="4">Cumilla</option>
                </select>
            </div>

            <div class="form-group">
                <label for="">Languages</label> <br>
                <input type="checkbox" class="form-control" v-model="stu.languages" value="bangla"> Bangla <br>
                <input type="checkbox" class="form-control" v-model="stu.languages" value="english"> English <br>
                <input type="checkbox" class="form-control" v-model="stu.languages" value="arabic"> Arabic <br>
                <input type="checkbox" class="form-control" v-model="stu.languages" value="german"> German <br>

            </div>

            <div class="form-group">
                <label for="">Photo</label>
                <input type="file" class="form-control">
            </div>

            <button type="submit" class="btn btn-info">Submit</button> &nbsp;
            <Link :href="route('students.create')" class="btn btn-warning">Clear</Link>

        </form>
    </div>
</template>

<style scoped></style>
