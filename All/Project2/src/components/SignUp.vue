<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

//default values
const readable = ref(0)
let submitted = ref(false)
let username = "First Last";
let useremail = "example@gmail.com";
let usermountain = "Mount Something";
</script>

<template>
  <h1 id="SignUp">Sign Up For A Tour Here!</h1>
  <!-- Toggles visibility of form -->
  <button type="button" @click="submitted=!submitted, readable=0">Toggle The Form Here!</button>
  <!-- Displays form input -->
  <div v-if="readable%=2">
    <p>
    Okay {{ username }} we'll send you an email at
    {{ useremail }} when Mike is ready to tour 
    {{ usermountain }}!
    </p>
  </div>
  <!-- Form -->
  <form v-if="isVisible=submitted">
    <br>
    <label for="first_name">Name: </label>
    <input v-model="username" type="text" id="first_name" name="first_name">
    <br>
    <label for="email">Email: </label>
    <input v-model="useremail" type="text" id="email" name="email">
    <br>
    <label for="mountain">Mountain You Want To Tour: </label>
    <input v-model="usermountain" type="text" id="mountain" name="mountain">
    <br>
    <button @click="submitted=!submitted, readable++" type="submit" value="Submit">Submit</button>
  </form>
</template>

<style scoped>
  form{
    text-align: left;
  }
</style>
