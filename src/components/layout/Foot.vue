<template>
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
                    <router-link :to="{ name: 'Terms' }">
                    Terms of service
                    </router-link>
                  </a>
                </li>
                <li class="column-item">
                  <a>
                    <router-link :to="{ name: 'Privacy' }">
                    Privacy policy
                    </router-link>
                  </a>
                </li>
                <li class="column-item">
                  <a>
                    <router-link :to="{ name: 'Cookie' }">
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
                  Help & support
                </li>
                <li class="column-item">
                  <a>
                    <router-link :to="{ name: 'Faq' }">
                      FAQ
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
