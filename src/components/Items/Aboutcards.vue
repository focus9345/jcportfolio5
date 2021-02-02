<template>
    <div class="container">
        <div class="card alt_bdr alt_bg" v-for="item in stacks" v-bind:key="item.id">
           <div class="card-icon green_bg"><font-awesome-icon v-bind:icon="item.icon" class="icon" /></div>
          <div class="card-title"><h3>{{ item.title }}</h3></div>
          <div class="card-body">
            <p>{{ item.description }}</p>
            <h4 class="alt-txt-heading">Concepts:</h4>
            <p>
                <span class="concept" v-for="(concept, index) in item.concepts" v-bind:key="index">{{ concept }}</span>
            </p>
            <h4 class="alt-txt-heading">Tools:</h4>
            <ul>
                <li v-for="(tool, index) in item.tools" v-bind:key="index">{{ tool }}</li>
            </ul>
          </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'Aboutcards',
    props: {
        stacks: Array
    }
}
</script>

<style lang="scss" scoped>

  .card {
    border-style: solid;
    border-width: 1px;
    border-radius: 1em;
    width: 28%;
    text-align: center;
    padding: 1.6% 1%;
    margin-bottom: 1.5em;
    .card-icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      text-align: center;
      line-height: 50px;
      vertical-align: middle;
      padding:25px 15px 10px 15px;
      margin: auto;
      .icon {
        margin: auto;
        font-size: 2em;
      }
    }
    .card-title {
      h3 {
        margin: 0.2em 0;
      }
    }
    .card-body {
      h4 {
        margin: 0.5em 0 .25em;
        font-weight: 600px;
      }
      p {
          font-size: 0.85em;
          line-height: 1.5em;
          margin:0 0 0.25em;
      }
      .concept {
        font-size: 1em;
        &:after {
            font-size: .4em;
            vertical-align:middle;
            content: " ♦ ";
        }
        &:last-child:after {                
            content: ". ";
            vertical-align:bottom;
        }
      }
      ul {
        margin:0;
        padding:0;
        list-style: none;
        li {
          font-size:.8em;
          margin-bottom:0.25em;
        }
      }
    }
  }
  @media (max-width: 600px) {
  .card {
    width: 80%;
    margin: 0 auto 2em;
    padding: 1.5em;
  }
}
</style>
