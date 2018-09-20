<template>
    <div>
        <!-- Start of hero section -->
        <section class="hero hero-background is-medium hero-image image-centered " v-bind:style="{ 'background-image': 'url(' + hands + ')' }">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="columns">
                        <div class="column"></div>
                        <div class="column is-6">
                            <div class="primary-span-home">
                            <h1 class="title white-text">
                                Save water & money
                            </h1>
                            <h2 class="subtitle white-text">
                                Track your household water usage free
                            </h2>
                            </div>
<a class="button white-text is-dark is-large">
                            <router-link :to="{ name: 'Signup' }">
                                Start tracking
                            </router-link>
                        </a>
                        </div>
                        <div class="column"></div>

                    </div>
                </div>
            </div>
        </section>
        <!-- End of hero section -->
        <!-- Start of How it works section -->
        <section class="homepage-sections">
            <div class="columns">
                <div class="bd-focus-item column has-text-centered">
                    <p class="title is-4">
                        <strong>High water bill?</strong>
                    </p>
                    <p class="subtitle is-6">No insights in
                        <strong>your household water</strong> usage?</p>
                    <div class="how-it-works-image">
                        <img src="@/assets/surprise.svg">
                    </div>
                </div>
                <div class="bd-focus-item column has-text-centered">
                    <p class="title is-4">
                        <strong>Add manually</strong>
                    </p>
                    <p class="subtitle is-6">
                        No expensive devices needed.
                        <strong>It's free.</strong>
                    </p>
                    <div class="how-it-works-image">
                        <img src="@/assets/watermeter.svg">
                    </div>
                </div>
                <div class="bd-focus-item column has-text-centered">
                    <p class="title is-4">
                        <strong>Get insights</strong>
                    </p>
                    <p class="subtitle is-6">
                        <strong>Save money & water</strong> with your dashboard
                    </p>
                    <div class="how-it-works-image">
                        <img src="@/assets/chart.svg">
                    </div>
                </div>
            </div>
        </section>
        <!-- End of How it works section -->
        <!-- Start of Why section -->
        <section class="homepage-sections">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <figure class="why-image ">
                            <img src="@/assets/earth.svg">
                        </figure>
                    </div>
                    <div class="column vertical-align">
                        <div class="content">
                            <h3 class="title">
                                Why Wterdrops
                            </h3>
                            <p class="subtitle is-4">
                                Wterdrops helps
                                <strong>saving your wallet and our planet.</strong>
                                <span class="why-text">For free.</span>
                            </p>
                            <div class="content">
                                <span>One</span>
                                <img src="@/assets/drop.svg" class="drop">
                                <span>at a time.</span>
                            </div>
                            <a class="button white-text is-dark is-large">
                                <router-link :to="{ name: 'Signup' }">
                                    Start saving
                                </router-link>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End of Why section -->
    </div>
</template>

<script>

export default {
  name: 'Homepage',
  data () {
    return {
      hands: require('@/assets/hands.jpg')
    }
  }
}
</script>

<style>
.hero-image {
  background-size: cover;
}
.image-centered {
  display: flex;
  justify-content: center;
}

.homepage-sections {
  padding: 5rem 1.5rem;
}

.primary-span-home {
  background-color: #42a2ff;
  color: #fff !important;
  opacity: 0.9;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
}

.how-it-works-image {
  display: flex;
  justify-content: center;
  height: 180px;
}

.why-image {
  display: flex;
  justify-content: center;
  height: 250px;
}

.hero-background {
  background-color: #f0f0f0;
}

.vertical-align {
  display: flex;
  align-items: center;
}

.drop {
  margin-bottom: -3px;
}
</style>
