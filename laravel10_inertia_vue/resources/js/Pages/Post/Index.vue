<script setup>
import { Link } from "@inertiajs/vue3";

defineProps({
  students: {
    type: Array,
    default: () => [],
  },
});

// const LangConvert = (lang) => {
//   return JSON.parse(lang).join(', ');
// }
</script>

<template>
  <div class="container">

    <Link :href="route('students.create')" class="btn btn-info">Add New</Link>
    <h1 class="display-1">Students List</h1>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>SN</th>
          <th>Name</th>
          <th>Photo</th>
          <th>Address</th>
          <th>Gender</th>
          <th>Date of Birth</th>
          <th>District</th>
          <th>Language</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="x in students" :key="x.id">
          <td>{{ x.id }}</td>
          <td>{{ x.name }}</td>
          <td><img :src="x.photo" alt="" width="100"></td>
          <td>{{ x.address }}</td>
          <td>{{ x.gender }}</td>
          <td>{{ x.dob }}</td>
          <td>{{ x.district }}</td>
          <td> {{ JSON.parse(x.languages).join(', ') }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>SN</th>
          <th>Name</th>
          <th>Photo</th>
          <th>Address</th>
          <th>Gender</th>
          <th>Date of Birth</th>
          <th>District</th>
          <th>Language</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<style scoped></style>
