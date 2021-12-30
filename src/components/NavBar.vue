<template>
  <b-navbar fixed-top="true" role="navigation" aria-label="main navigation" class="container is-max-desktop shadow small">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img class="logo"
          src="@/assets/images/logo.jpg"
          alt="Pure Drop"
        />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="router-link" :to="{ path: '/' }" class="">
        Home
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/about' }" >
        About
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/contact' }" >
        Contact
      </b-navbar-item>
    </template>

    <template #end>
      test
     </template>
        
  </b-navbar>
</template>

<style>
  .logo {
    max-height: 50px;
  }
</style> 