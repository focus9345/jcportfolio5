<template>
    <div class="container">
        <div class="card alt_bdr alt_bg" v-for="item in knowledges" v-bind:key="item.id">
          <div class="card-icon green_bg"></div>
          <div class="card-title"><strong>{{ item.place }}</strong></div>
          <div class="card-body">
            <h4>{{ item.degree }}</h4>
            <p> 
                {{ item.description }} <br/>
                <em>{{ item.date }}</em>
            </p>
          </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'Educards',
    props: {
        knowledges: Array
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
      padding:25px;
      margin: auto;
      background-image: url(../../assets/southernct_black.svg);
      background-repeat: no-repeat;
      background-position: center;
      .icon {
        margin: auto;
        font-size: 2em;
      }
    }
    .card-title {
        margin: 0.8em 0;
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
