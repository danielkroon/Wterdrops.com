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
  }
}
</script>

<style lang="scss">

.body {
  background-color: #f4f4f4;
}

  // Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #42A2FF;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

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
