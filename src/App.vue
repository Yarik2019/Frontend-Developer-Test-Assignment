<template>
  <div>
    <VueNav/>
    <vueIntro/>
    <VueWorking/>
    <vueForm/>
  </div>
</template>

<script>
import VueNav from './components/vueNav.vue';
import VueIntro from './components/vueIntro.vue';
import VueWorking from './components/vueWorking.vue';
import vueForm from './components/vueForm.vue';
export default {
  name: 'App',
  components: {
    VueNav,
    VueIntro,
    VueWorking,
    vueForm
}
}
</script>

<style src="./style/style.css">
</style>
