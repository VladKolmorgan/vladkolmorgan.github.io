<script setup>
/*
////////////////////////////////////////////////////////////
  --
  #Original Author:Vlad Kolmorgan
  #Date Created:4/29/2024
  #Version:v 1.0.0
  #Date Last Modified:5/1/2024
  #Modified by:Vlad Kolmorgan
  #Modification log:
  v 0.1.0 - 4/29/2024  - outline created, rough shape of website established
  v 0.2.0 - 4/30/2024 - made components and filled in app.vue with them.
  v 1.0.0 - 5/1/2024 - added content to the page as well as finishing touches
//References/////////////////////////////////////////////// 
  Images -    Sources included in image tags
  Paragraph Content -   Courtesy of Chat GPT 3.5
////////////////////////////////////////////////////////////
*/
import HeaderSection from './components/HeaderSection.vue'
import Navigation from './components/Navigation.vue'
import MountainName from './components/MountainName.vue'
import MountEverpeak from './components/MountEverpeak.vue'
import RainbowRidge from './components/RainbowRidge.vue'
import CrystalCrest from './components/CrystalCrest.vue'
import WhisperingPeak from './components/WhisperingPeak.vue'
import LuminaPeak from './components/LuminaPeak.vue'
import SignUp from './components/SignUp.vue'
import Foot from './components/Foot.vue'
</script>

<template>
  <!-- Header -->
  <HeaderSection title="Mike's Mountain Tours" />
  <!-- Navigation -->
  <Navigation />
  <!-- Main Content -->
  <!-- Mountain 1 -->
  <img id="Mountains" src="https://th.bing.com/th/id/R.c415eef0ae1f9bd6f41fbc7a574b9d9b?rik=aiJJM7wZpqGHkA&riu=http%3a%2f%2fwww.pixolo.it%2fwp-content%2fuploads%2f2012%2f11%2fboat-on-the-lake-1920x1200-wallpaper-5127.jpg&ehk=eCaUG%2fp9SP0tH8XioU8jNxZp5vHft%2fuqUsnhDRWkLlI%3d&risl=1&pid=ImgRaw&r=0" />
  <MountainName name="Mount Everpeak" />
  <MountEverpeak />
  <!-- Mountain 2 -->
  <img src="https://th.bing.com/th/id/R.6faa8f60504fa1403a802d1a317b66f4?rik=NRcioaogZRE%2btQ&riu=http%3a%2f%2fwww.pixolo.it%2fwp-content%2fuploads%2f2013%2f05%2fhawaii-bungalows-1920x1200-wallpaper-9619.jpg&ehk=wz8rVVoBNhtilOVPbNsnlG9M1hN0ZY0sFc4sFprkFtU%3d&risl=&pid=ImgRaw&r=0" />
  <MountainName name="Rainbow Ridge" />
  <RainbowRidge />
  <!-- Mountain 3 -->
  <img src="https://pics.cool.pics/content/1920x1200/075067content_408a0a90-e8a9-479f-b1f9-8fd946df3f32-s4.jpg" />
  <MountainName name="Crystal Crest" />
  <CrystalCrest />
  <!-- Mountain 4 -->
  <img src="https://th.bing.com/th/id/R.f49b5355907cbc2032a871afbd7ae284?rik=WoJV7MTHn41VVQ&riu=http%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f90000%2fvelka%2fcanyon-and-mountains.jpg&ehk=%2bPSpcA9jHYMKyr2JIa4U2I3Z7srh7SO5cyUiGqtCFn4%3d&risl=&pid=ImgRaw&r=0" />
  <MountainName name="Whispering Peak" />
  <WhisperingPeak />
  <!-- Mountain 5 -->
  <img src="https://pics.cool.pics/content/1920x1200/033901content_e83ace41-b254-4430-82dd-3c0f09ae6750-s4.jpg" />
  <MountainName name="Lumina Peak" />
  <LuminaPeak />
  <!-- Sign Up -->
  <SignUp />
  <!-- Footer -->
  <Foot />
</template>

<style scoped>
img{
  height: 100%;
  width: 100%;
}
</style>
