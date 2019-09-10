<template>
  <div class="flexbox flex-col" id="root-div">
    <div class="nav-links">
      <a href="https://github.com/arya-aag/" target="_blank">github</a>
    </div>
    <main class="spacer flexbox main-div">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
#root-div {
  height: -webkit-fill-available;
}
.nav-links {
  text-align: right;
}
a {
  text-decoration: none;
  color: #8d8d8d;
}
a:hover {
  color: #7a7a7a;
}
.main-div {
  align-items: center;
  justify-content: center;
}
</style>

<script>
export default {
  data: () => ({})
};
</script>
