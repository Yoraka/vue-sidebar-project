<template>
    <div class="relative dropdown">
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-custom">{{ label }}</button>
      <div class="dropdown-menu absolute hidden bg-white shadow-md rounded mt-2 py-1 w-32">
        <a href="#" v-for="option in options" :key="option.value" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{{ option.label }}</a>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'DropDown',
  props: {
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  }
}
</script>

  <style scoped>
  .dropdown:hover .dropdown-menu {
    display: block;
  }
  </style>
