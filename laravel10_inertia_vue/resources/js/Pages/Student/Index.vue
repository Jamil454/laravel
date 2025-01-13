<script setup>
import { useForm, usePage, Link } from '@inertiajs/vue3';

defineProps({
    students: {
        type: Array,
        default: () => [],
    }
})

</script>

<template>
    <div class="container">
        <h1 class="display-1">Student Lists</h1> <br>
        <Link :href="route('students.create')" class="btn btn-success">New Entry</Link>

        <table class="table table-bordered">
            <thead>
                <tr>
                    <td>SN</td>
                    <td>Name</td>
                    <td>Photo</td>
                    <td>Address</td>
                    <td>Date of Birth</td>
                    <td>Gender</td>
                    <td>District</td>
                    <td>Language</td>

                </tr>
            </thead>
            <tbody>
                <tr v-for="x in students" :key="x.id">
                    <td>{{ x.id }}</td>
                    <td>{{ x.name }}</td>
                    <td>{{ x.photo }}</td>
                    <td>{{ x.address }}</td>
                    <td>{{ x.dob }}</td>
                    <td>{{ x.gender }}</td>
                    <td>{{ x.district }}</td>
                    <td>{{ x.languages }}</td>
                </tr>
            </tbody>

        </table>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped></style>
