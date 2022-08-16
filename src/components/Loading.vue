<template>
  <div class="loading">
    <span></span>
  </div>
</template>
<script>
export default {
  name: 'vueLoading'
}
</script>

<style>
span {
  display: block;
  width: 48px;
  height: 48px;
  margin: 0 auto;
  border: 5px solid transparent;
  border-top-color: #00BDD3;
  border-left-color: #00BDD3;
  border-bottom-color: #00BDD3;
  border-radius: 50%;
  animation: spin ease 1000ms infinite;
}

@keyframes spin {
  to {
    transform: rotateZ(360deg);
  }
}
</style>