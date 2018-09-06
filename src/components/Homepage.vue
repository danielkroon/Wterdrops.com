<template>
    <div>
        <section class="hero is-medium hero-image" v-bind:style="{ 'background-image': 'url(' + image + ')' }">
            <div class="hero-body home-search-body">
                <div class="container has-text-centered">
                    <div class="columns">
                        <div class="column"></div>
                        <div class="column is-6">
                            <h3 class="title is-3 primary-span-home">
                                Prevent high water bills. Track of your household water usage. For free.
                            </h3>
                            <p></p>
                        </div>
                        <div class="column"></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="columns is-vcentered">

                    <div class="column is-3 is-offset-1">
                        <div class="image-centered">
                            <figure class="image">
                                <img src="@/assets/suprise.svg">
                            </figure>
                        </div>
                        <hr class="spacer is-1">
                        <p class="title has-text-centered is-spaced">
                            <strong>Surprise water bills?</strong>
                        </p>
                        <p class="subtitle has-text-centered">
                            High water bill because you don't know how much water your household uses?
                        </p>
                    </div>

                    <div class="column is-3 is-offset-1">
                        <div class="image-centered">
                            <figure class="image">
                                <img src="@/assets/watermeter.svg">
                            </figure>
                        </div>
                        <hr class="spacer is-1">
                        <p class="title has-text-centered is-spaced">
                            <strong>Submit your meter reading</strong>
                        </p>
                        <p class="subtitle has-text-centered">
                            No expesive monitoring devices needed. Just you, your meter and a pair of healthy eyes.
                        </p>
                    </div>

                    <div class="column is-3 is-offset-1">
                        <div class="image-centered">
                            <figure class="image">
                                <img src="@/assets/chart.svg">
                            </figure>
                        </div>
                        <hr class="spacer is-1">
                        <p class="title has-text-centered is-spaced">
                            <strong>Track water in dashboard</strong>
                        </p>
                        <p class="subtitle has-text-centered">
                            Your own dashboard gives you insights into your water use. So you can save water and money.
                        </p>
                    </div>

                </div>
            </div>

        </section>
        <div class="hero is-large hero-image laptop" v-bind:style="{ 'background-image': 'url(' + laptop + ')' }">
            <div class="hero-body home-search-body">
                <div class="container">
                    <div class="columns">
                        <div class="column is-6">
                            <h3 class="title is-3 primary-span-home">
                                Get insights on your household water usage with a personal dashboard.
                            </h3>
                            <p></p>
                        </div>

                        <div class="column"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Homepage',
  data () {
    return {
      image: require('@/assets/hero.jpg'),
      laptop: require('@/assets/laptop.jpg')
    }
  }
}
</script>

<style>
.primary-span-home {
  background-color: #42a2ff;
  color: #fff !important;
  opacity: 0.9;
  padding: 10px;
  border-radius: 4px;
}

.hero-image {
  background-size: cover;
}

.image-centered {
  display: flex;
  justify-content: center;
}
</style>
