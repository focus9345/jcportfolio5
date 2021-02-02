<template>
    <section id="education" class="full_height alt_bg">
      <h2>Education</h2>
      <Educards v-bind:knowledges="knowledges" />
    </section>
</template>

<script>
import Educards from './Items/Educards';

export default {
 name:'Education',
 data: function () {
        return {
            knowledges: [
              { 
                id: 0,  
                place: "Southern Conneticut State University",
                degree: "Masters of Science",
                description: "Computer Science - Software Development",
                date: "Spring 2020"
                },
                { 
                id: 1,  
                place: "Southern Conneticut State University",
                degree: "Bachelor of Science",
                description: "Studio Art - Graphic Design",
                date: "Spring 2018"
                },
    ]
        }
 },
 components: {
   Educards
 }
};
</script>

