<script setup>
import axios from 'axios';
import JobListing from './JobListing.vue';
import { onMounted, reactive} from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

import { RouterLink } from 'vue-router';

const state = reactive({
  jobs : [],
  isLoading : true
});
onMounted(async() =>{
  try{
    const response = await axios.get('/api/jobs');
    state.jobs = response.data
  }catch(err){
    console.log(err)
  }finally{
    state.isLoading = false;
  }
})


 defineProps({
  limit : Number,
  showButton : {
    type : Boolean,
    default : false
  }
 })
</script>

<template>
    <section class="bg-sky-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-sky-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
          <PulseLoader/>
        </div>
        <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Job Listing 1 -->
          <JobListing v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id" :job="job"/>
        </div>
      </div>
    </section>
    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink
      >
    </section>
</template>