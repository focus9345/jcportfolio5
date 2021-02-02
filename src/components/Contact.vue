<template>
    <section id="contact" class="full_height alt_bg">
      <h2>Contact</h2>
<div class="container">
  <div class="card">
    <h3>Location</h3>
    <p>North Haven, CT</p>
    <h3>Resume</h3>
    <p><a href="https://drive.google.com/file/d/1hY_gGEF0WpUElbc6PzSR7g3inIh5nc56/view?usp=sharing" class="btn">  <font-awesome-icon :icon="['fas', 'file-download']" />&nbsp;Resume download</a></p>
    <h3>More to Follow</h3>
    <div class="col">
            <a href="https://github.com/focus9345/">
              <font-awesome-icon :icon="['fab', 'github-square']" />
            </a>
            <a href="https://www.linkedin.com/in/grindcolordesign/">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>

            <a href="https://twitter.com/connordev9">
              <font-awesome-icon :icon="['fab', 'twitter-square']" />
            </a>

            <a href="https://www.instagram.com/joshuaconnor8345/">
              <font-awesome-icon :icon="['fab', 'instagram-square']" />
            </a>
          </div>


    </div>
      <div class="card green_bg">
        <form class="contact-form" @submit.prevent="sendEmail">
              <div class="form-group">
                <label for="name">
                  <font-awesome-icon :icon="['fas', 'user']" />
                </label>
                <input id="name" type="text" name="user_name" placeholder="Enter your full name" class="alt_bdr input_bg" />
              </div>
              <div class="form-group">
                <label for="email">
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                </label>
                <input
                  id="email"
                  type="email"
                  name="user_email"
                  placeholder="Enter your email address"
                  class="alt_bdr input_bg"
                />
              </div>
              <div class="form-group">
                <label for="message">
                  <font-awesome-icon :icon="['fas', 'comment']" />
                </label>
                <textarea id="message" name="message" placeholder="Enter your message" class="alt_bdr input_bg"></textarea>
              </div>
              <div class="form-group">
                <vue-recaptcha sitekey="6Lc2vLQZAAAAAGPcVGthoqaqPf7TO677L-W1S93s"></vue-recaptcha>
              </div>
              <div class="form-group">
                <input type="submit" value="Send" class="btn" />
              </div>
            </form>
       </div>
       </div>
    </section>
</template>

<script>
import emailjs from "emailjs-com";
import VueRecaptcha from "vue-recaptcha";

export default {
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit"
    );
    document.head.appendChild(recaptchaScript);
  },
  components: {
    VueRecaptcha,
  },
  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          "gmailconnor23w3",
          "template_x5QsUHfi",
          e.target,
          "user_0ZMH9CDT8VWpXAkH2Zbkg"
        )
        .then(
          (result) => {
            alert("SUCCESS!", result.status, result.text);
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
  },
  metaInfo: {
    title: "Contact Joshua Connor",
    titleTemplate: "%s - Resume Available",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .card {
    border-radius: 1em;
    width: 40%;
    text-align: center;
    padding: 1.6% 1%;
    margin-bottom: 1.5em;
    form {
      .form-group {
        text-align: center;
        vertical-align: middle;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: baseline;
        div {
          margin: 0 auto;
        }
        label {
          display: inline-block;
          vertical-align: text-top;
        }
        .input_bg {
background-color: transparent;  
        }
        input, textarea {
          
          border-style: solid;
          border-width: 0;
          border-bottom-width: 1px;
          width: 80%;
          padding:2% 1%;
          margin: .5em 0 .6em 0.2em;
          transition: all 1s ease;
  
          &:placeholder-shown {
            color:rgba(0,0,0,0.7);
          }
          &:focus {
            outline: none;
            border:none;
            border-bottom: 1px solid yellow;
          }
          &:active {
            background: #C2D500;
          }
          &:hover {
            border-bottom-color: #E6E6E6;
          }
        }
        .btn {
          width: 50%;
          padding:1em;
          border:none;
          margin:.5em auto;
        }
        
        
      }
    }
    .col {
      display:flex;
      justify-content: center;
      a {
        font-size: 2.6em;
        display:inline-block;
        transition: color 0.5s ease;
        margin: .1em;
        
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