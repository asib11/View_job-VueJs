<script setup>
  import Navbar from '@/components/Navbar.vue';
  import Hero from '@/components/Hero.vue';
  import HomeCards from '@/components/HomeCards.vue';
  import JobListings from '@/components/JobListings.vue';
  
</script>

<template>
  <Navbar />
  <Hero title="This is my title" subtitle="oh my Allah, This is subtitle"/>
  <HomeCards/>
  <JobListings :limit="3" :showButton="true"/>
</template>

<style >

</style>

