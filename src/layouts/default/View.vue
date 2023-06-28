<template>
  <!-- <v-sheet color="primary" height="64px" />
  <v-layout>
      <v-navigation-drawer color="primary" expand-on-hover rail>


        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-store" title="Products" value="products"></v-list-item>
          <v-list-item prepend-icon="mdi-tent" title="Rentals" value="rentals"></v-list-item>
          <v-list-item prepend-icon="mdi-email" title="Info" value="info"></v-list-item>
        </v-list>
      </v-navigation-drawer> -->
  <v-main>
    <v-sheet height="100%" color="primary">




      <router-view />

    </v-sheet>
  </v-main>


  <!-- </v-layout> -->
</template>

<script setup>
  //
</script>
