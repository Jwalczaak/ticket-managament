<template>
  <div>
    <nav class="navbar">
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>
<style>
.navbar {
  background-color: #f8f9fa;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
}

.nav-link {
  text-decoration: none;
  color: black;
}

.router-link-exact-active {
  color: red;
}
</style>

<script>
export default {
  name: "App",
};
</script>
