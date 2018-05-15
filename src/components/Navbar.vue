<template>
    <div class="navbar">
        <nav class="nav-extend blue darken-2">
            <div class="nav-content">
                <router-link to="">
                    <span class="nav-title">Waterstats</span>
                </router-link>
                <ul class="right">
                    <li>
                        <a href="" class="waves-effect waves-light btn  blue lighten-1">Add
                            <router-link to="">
                                 <i class="material-icons">add</i>
                            </router-link>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {

        }
    }
}
</script>

<style>
.navbar .nav-title {
    padding: 0px 0px 0px 10px;
}
</style>

