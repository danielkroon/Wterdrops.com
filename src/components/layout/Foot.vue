<template>
  <!-- <footer class="footer">
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
  </footer> -->
  <footer class="footer footer-light-medium">
    <div class="container">
      <div class="columns">
        <!-- Column -->
        <div class="column is-4">
          <div class="mb-20">
            <img src="@/assets/logo.svg" alt="Wterdrops">
            <div>
              Track your household water usage manually without expensive devices for free.
            </div>
          </div>
          <div class="by">
            <p>Build by
              <a href="https://github.com/danielkroon">Daniel Kroon</a>.</p>
          </div>

        </div>
        <!-- Column -->
        <div class="column is-6 is-offset-2">
          <div class="columns">
            <!-- Column -->
           <div class="column">
              <ul class="footer-column">
                <li class="column-header">
                  Terms
                </li>
                <li class="column-item">
                  <a>
                    <router-link :to="{ name: 'Faq' }">
                      Terms of Service
                    </router-link>
                  </a>
                </li>
                <li class="column-item">
                  <a>
                    <router-link :to="{ name: 'Faq' }">
                      Privacy policy
                    </router-link>
                  </a>
                </li>
                 <li class="column-item">
                  <a>
                    <router-link :to="{ name: 'Faq' }">
                      Cookie policy
                    </router-link>
                  </a>
                </li>
              </ul>
            </div>
             <!-- Column -->
            <div class="column">
              <ul class="footer-column">
                <li class="column-header">
                  About
                </li>
                <li class="column-item">
                  <a>
                    <router-link :to="{ name: 'Homepage' }">
                      Home
                    </router-link>
                  </a>
                </li>
                <li class="column-item">
                  <a>
                    <router-link :to="{ name: 'Faq' }">
                      About the platform
                    </router-link>
                  </a>
                </li>
              </ul>
            </div>
            <!-- Column -->
          <div class="column">
              <ul class="footer-column">
                <li class="column-header">
                  Help & support
                </li>
                <li class="column-item">
                  <a>
                    <router-link :to="{ name: 'Homepage' }">
                      FAQ
                    </router-link>
                  </a>
                </li>
                <li class="column-item">
                  <a>
                    <router-link :to="{ name: 'Faq' }">
                      How it works
                    </router-link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
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

<style scoped>
.by {
  margin: 15px 0 0 0;
}
</style>
