<template>
  <FollowMouse></FollowMouse>
  <BurgerMenu></BurgerMenu>
  <section class="contentProjet">
    <h1>Projets</h1>
    <ListProjets></ListProjets>
  </section>
    <Footer></Footer>
</template>

<script setup>
import BurgerMenu from "@/components/BurgerMenu.vue";
import FollowMouse from "./components/FollowMouse.vue";
import ListProjets from "./components/ListProjets.vue";
import Footer from "./components/Footer.vue";
</script>

<style lang="scss">

@import "./assets/responsive.scss";


.contentProjet {
  height: auto;
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5vw;
  margin-top: 2.5vw;
  margin-bottom: 2.5vw;
}

.contentProjet h1 {
  font-size: 5vw;
  color: var(--var-color4);
  font-family: "Lilita One", cursive;
  animation: apparitionTitle 1s ease-in-out;

  @include respond(tab-800) {
    font-size: 8vw;
  }

  @include respond(phone-big) {
    font-size: 10vw;
  }

  @include respond(phone-500) {
    font-size: 12vw;
  }

  @include respond(phone-330){
    font-size: 17vw;
  }
}

</style>