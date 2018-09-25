<template>
  <div class="body">
    <navbar />
    <router-view />
    <Foot />
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import Foot from '@/components/layout/Foot'

export default {
  components: {
    Navbar,
    Foot
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Wterdrops.com',
    // all titles will be injected into this template
    titleTemplate: '%s | Track your household water usage manually for free.'
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Roboto');
.body {
  background-color: #fff;
  font-family: 'Roboto', sans-serif;
}

  // Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #42A2FF;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);
$dark: #B3D136;
// #1f95c4 accent blauw

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
// $link: red;
// $link-invert: $white;
// $link-focus-border: $primary;

$notification-background-color: #fff;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
