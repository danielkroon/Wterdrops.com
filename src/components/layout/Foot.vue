<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <strong>Wterdrops.com</strong> lets you track your household water usage manually without expensive devices for free.</p>
        <p></p>
        <p>Consider a small donation to help me to keep the site running!</p>
        <a href="https://paypal.me/kroon22" target="_blank" type="button" class="button">
          <b-icon icon="coffee" size="is-small">
          </b-icon>
          <span>MAKE A DONATION</span>
        </a>
        <div class="by">

          <strong>Wterdrops.com</strong> by
          <a href="https://github.com/danielkroon">Daniel Kroon</a>.
        </div>

      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {

    }
  }
}
</script>

<style>
.footer {
  background-color: #42A2FF;
}

.by {
  margin: 15px 0 0 0;
}

p {
  color: #fff;
}
</style>
