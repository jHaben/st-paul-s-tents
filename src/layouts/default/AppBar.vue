<template>
  <v-app-bar v-if="!isMobile" color="primary">
    <v-container>
      <v-row class="d-flex ">
        <v-col cols="3" ><router-link :to="{ name: 'Home' }">
            <v-btn text color="white">Home</v-btn>
          </router-link>
        </v-col>
        <v-col class="mx-1" cols="3" ><router-link :to="{ name: 'Products' }">
            <v-btn text color="white">Products</v-btn>
          </router-link>
        </v-col>
        <v-col  class="mx-1" cols="3"><router-link :to="{ name: 'Rentals' }">
            <v-btn text color="white">Rentals</v-btn>
          </router-link>
        </v-col>
        <v-col cols="1" ><router-link :to="{ name: 'Info' }">
            <v-btn text color="white">Info</v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>

</script>
