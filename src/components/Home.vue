<template>
  <section id="home" class="flex-page">
    <div class="home-adjust">
      <div class="home-show">
        <div id="slide-right" class="right-scroll"></div>
        <div id="slide-left" class="left-scroll"></div>
        <div class="copy">
          <img
            alt="Portfolio for Joshua Connor"
            class="logo"
            src="../assets/Joshua-LOGO.svg"
          />
          <h1>Designer, Front-end Developer</h1>
          <div class="main-action">
            <a class="view green_bdr home-button" href="#about-us"
              >View My Work
              <font-awesome-icon icon="hand-point-right" class="hand"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#home {
  align-items: center;
  justify-content: center;
  .home-adjust {
    h1 {
      text-align: center;
      margin: 40vh 0 0 0;
      font-size: 3em;
      font-weight: 300;
      color:#EEE;
    }
    .main-action {
      display: flex;
      text-align: center;
      justify-content: center;
    }
    .home-button {
      border-width: 2px;
      border-style: solid;
      padding: 0.75rem;
      border-radius: 5px;
      background: none;
      display: inline-block;
      font-size: 1.4em;
      text-decoration: none;
      .hand {
        padding-left: 0.5em;
        transition: 0.6s;
      }
      &:hover {
          color:#EEE;
        .hand {
          transition: 0.9s;
          transform: rotate(90deg);
        }
      }
    }
    img {
      display: block;
      margin: 10vh auto 0 auto;
    }
    .logo {
      max-height: 18vh;
      max-width: 18vw;
    }
  }
}

@media (max-width: 600px) {
  #home {
    .home-adjust {
      h1 {
        text-align: center;
        margin: 1em auto;
        font-size: 2em;
      }
    }
  }
}
/*
 * Home page slow slide of two photos
 *
**/

.home-show {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  background-color: rgb(0, 0, 0);
}
.home-show > div {
  transform: translate3d(0, 0, 0);
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-size: cover;
}
.copy {
  height: auto;
  display:flex;
  flex-direction:column;
}
.right-scroll {
  animation: slideshow-right 500s linear infinite;
  background: url(../assets/right-home.png) no-repeat center center fixed;
}
.left-scroll {
  animation: slideshow-left 700s linear infinite;
  background: url(../assets/left-home.png) no-repeat center center fixed;
}

/* Slow background animation */
@keyframes slideshow-left {
  100% {
    transform: translateX(-66.6666%);
  }
}
@keyframes slideshow-right {
  100% {
    transform: translateX(66.6666%);
  }
}
</style>