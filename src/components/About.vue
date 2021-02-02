<template>
    <section id="about-us" class="full_height">
      <div class="heading_img green_bdr"></div>
      <h2>About</h2>
      <Aboutcards v-bind:stacks="stacks" />
    </section>
</template> 

<script>
import Aboutcards from './Items/Aboutcards';

export default {
 name:'About',
 data: function () {
        return {
            stacks: [
              { 
                id: 0, 
                icon: "desktop", 
                title: "Designer",
                description: "I care about thoughtful content, crisp ideas, clean higharchy, user accessablility and experinces.",
                concepts: ['UX', 'UI', 'SPA’s', 'Web', 'Mobile', 'Branding'],
                tools: ['Sketch', 'Lucidchart', 'Paper &amp; Marker', 'Adobe Cloud'],
                },
              { 
                id: 1, 
                icon: "code", 
                title: "Front-End Developer",
                description:"I love coding, solving problems, bringing ideas to life, delivering quality responsive software, and making change happen.",
                concepts: ['HTML', 'CSS', 'SASS', 'Javascript', 'Git', 'MVC', 'Agile'],
                tools: ['Visual Studio Code', 'Github || Gitlab', 'Trello || Jira', 'Bootstrap || Material Ui', 'Terminal', 'Vue || React'],
                },
              { 
                id: 2, 
                icon: "database", 
                title: "Backend Developer",
                description: "Ok, I am working on developing and learning more about these concepts and working as a fullstack developer someday.",
                concepts: ['PHP', 'Python', 'Java', 'SQL', 'Typescript', 'OOP || Functional', 'Unit Testing'],
                tools: ['MySQL', 'GraphQL', 'AWS || Cloud', 'MEAN || LAMP' ],
                },
    ]
        }
 },
 components: {
   Aboutcards
 }
};
</script>

<style lang="scss" scoped>
  .heading_img{
    border-radius: 50%;
    border-width: 1px;
    border-style: solid;
    height: 140px;
    width: 140px;
    margin:20px auto 10px auto;
    background-image: url(../assets/bicycle.svg);
    background-repeat: no-repeat;
    background-position: 14px 20px;
    background-size: 130%;

  }
  h2 {
    margin-top:0;
  }

</style>