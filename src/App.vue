<template>
  <div class="home">
    <header>
      <HeaderWeb />
    </header>
    <main>
      <CardList />
    </main>
    <footer>
      <FooterWeb />
    </footer>
  </div>
</template>

<script>
import HeaderWeb from './components/header-web.vue';
import FooterWeb from './components/footer-web.vue';
import CardList from './components/card-list.vue';

export default {
  name: 'App',
  components: {
    HeaderWeb,
    FooterWeb,
    CardList,
  },
}
</script>
