<template>
    <section id="about-us" class="full_height patterned">
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
  .patterned {
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="28" height="49" viewBox="0 0 28 49"%3E%3Cg fill-rule="evenodd"%3E%3Cg id="hexagons" fill="%239C92AC" fill-opacity="0.1" fill-rule="nonzero"%3E%3Cpath d="M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
  }
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