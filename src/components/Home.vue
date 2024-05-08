<template>
  <!-- Search bar -->
  <div class="container mx-auto py-4 mx-4">
    <input
      type="text"
      placeholder="Search..."
      class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
    />
  </div>

  <!-- Table -->
  <div class="container mx-auto px-4">
    <table class="min-w-full bg-white border rounded-lg overflow-hidden">
      <thead class="bg-gray-100 border-b">
        <tr>
          <th class="text-left py-2 px-3 uppercase font-semibold text-sm">
            Name
          </th>
          <th class="text-left py-2 px-3 uppercase font-semibold text-sm">
            Age
          </th>
          <th class="text-left py-2 px-3 uppercase font-semibold text-sm">
            Grade
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <!-- Sample data -->
        <tr>
          <td class="py-3 px-3">John Doe</td>
          <td class="py-3 px-3">18</td>
          <td class="py-3 px-3">12</td>
        </tr>
        <!-- More rows... -->
      </tbody>
    </table>
  </div>

  <!-- Button to add a new student -->
  <div class="container mx-auto mt-4 flex justify-end">
    <button
      id="toggleForm"
      class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
    >
      Add Student
    </button>
  </div>

  <!-- Collapsible form for adding a new student -->
  <div id="addStudentForm" class="container mx-auto mt-4">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Name
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="age">
          Age
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="age"
          type="text"
          placeholder="Age"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="grade">
          Grade
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="grade"
          type="text"
          placeholder="Grade"
        />
      </div>
      <div class="flex items-center justify-end">
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
</script>
