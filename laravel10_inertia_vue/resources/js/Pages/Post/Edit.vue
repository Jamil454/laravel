<script setup>

import { usePage, useForm, Link } from '@inertiajs/vue3';

const { post } = usePage().props

const form = useForm({
    title: post.title,
    body: post.body,
});
const update = ()=>{
    form.put(route("posts.update" , post.id))
}

</script>

<template>

    <div class="container">
        <form action="" @submit.prevent="update">

            <div class="form-group">
                <label for=""> Title</label>
                <input type="text" v-model="form.title" class="form-control">
            </div>
            <div class="form-group">
                <label for=""> Body</label>
                <textarea v-model="form.body" class="form-control"></textarea>
                <button type="submit" name="submit" class="btn btn-warning">UPDATE</button>
            </div>
        </form>
    </div>
</template>

<style scoped></style>
