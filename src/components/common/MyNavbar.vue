<template>
  <div>
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
      <a href="index.html" class="navbar-brand">RAKIB INFO</a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <img src="images/Hamburger_icon.svg.png" style="height: 20px; width: 20px">
      </button>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <img src="images/Hamburger_icon.svg.png" style="height: 20px; width: 20px">
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item"><a href="/" class="nav-link">HOME</a></li>
          <li class="nav-item"><a href="/about" class="nav-link">ABOUT</a></li>
          <li class="nav-item"><a href="/portfolio" class="nav-link">PORTFOLIO</a></li>
          <li class="nav-item"><a href="/gallery" class="nav-link">GALLERY</a></li>
          <li class="nav-item"><a href="/contact" class="nav-link">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
    export default {
        name: "MyNavbar"
    }
</script>

<style scoped>

</style>
