
<script setup>
import {Link, usePage, useForm } from '@inertiajs/vue3';


//  const {posts}= usePage().props
 const form = useForm({});

 const deletePost = (id) =>{
    form.delete(route ('posts.destroy',{id}))
    // form.delete('posts/${id}')
 }
 defineProps({
    posts:{
        type : Array,
        default: () => [],
    },
 });


</script>


<template>
    <div class="container">
        <h1 class="display-1">Welcome to Vue with laravel</h1>
        <Link :href="route('posts.create')"  class="btn btn-success">New Entry</Link>
        <table class="table table-bordered">
            <tr>
                <th>SN</th>
                <th>Title</th>
                <th>Details</th>
                <th style="width: 300px;">Action</th>
            </tr>
            <tr v-for="x in posts" :key="x.id">
                <td>{{ x.id }}</td>
               <td>{{ x.title }}</td>
               <td>{{ x.body }}</td>
               <td>
                <Link :href="route('posts.edit', x.id)" class="btn btn-warning btn-sm">EDIT</Link>  |
                <!-- <Link :href="route('posts.destroy', x.id)" class="btn btn-danger btn-sm">DELETE </Link> -->
                <button @click="deletePost(x.id)" class="btn btn-danger btn-sm">DELETE</button>
            </td>
            </tr>
            <td></td>
        </table>
    </div>

</template>


<style scoped></style>
