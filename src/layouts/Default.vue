<template>
  <div class="layout">
    <Navbar />

    <!-- <section class="hero is-medium is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">
            {{ pageTitle }}
          </h1>
          <h2 v-if="pageSubtitle" class="subtitle">
            {{ pageSubtitle }}
          </h2>
        </div>
      </div>
    </section> -->

    <main>
      <slot />
    </main>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Created by <strong>Galahad Inc.</strong>
          . Powered by <a href="https://gridsome.org/"><strong>Gridsome</strong></a>
          >.
        </p>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
  import Navbar from '~/components/NavBar';
  export default {
    props: { pageTitle: '', pageSubtitle: '', color: '' },
    components: { Navbar },
  };
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
