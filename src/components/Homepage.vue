<template>
    <div>
        <section class="hero is-medium hero-image" v-bind:style="{ 'background-image': 'url(' + image + ')' }">
            <div class="hero-body home-search-body">
                <div class="container has-text-centered">
                    <div class="columns">
                        <div class="column"></div>
                        <div class="column is-6">
                            <h3 class="title is-3 primary-span-home">
                                High water bill? Track of your household water usage. For free.
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

                    <div class="column is-6 is-offset-1">
                        <p class="title" style="margin-top: 6px;">
                            <strong>Submit your meter reading</strong>
                        </p>
                        <p class="subtitle" style="margin-top: -0.5rem;">
                            No expesive monitoring devices needed. Just you and your pair of eyes.
                        </p>
                    </div>
                    <div class="column is-6 is-offset-1">
                        <figure class="image image-meter">
                            <img src="@/assets/watermeter.svg">
                        </figure>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="columns is-vcentered">

                    <div class="column is-6">
                        <figure class="image">
                            <img src="@/assets/watermeter.svg">
                        </figure>

                    </div>
                    <div class="column is-3by4">
                          <p class="title" style="margin-top: 6px;">
                            <strong>Personal usage dashboard</strong>
                        </p>
                        <p class="subtitle" style="margin-top: -0.5rem;">
                            Get insights on your household water usage with a personal dashboard.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>

export default {
  name: 'Homepage',
  data () {
    return {
      image: require('@/assets/hero.jpg')
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
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.image-meter {
    width: 50%;
}
</style>
