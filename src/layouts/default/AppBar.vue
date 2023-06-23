<template>
  <v-app-bar color="primary">
    <v-container>

      <v-row>
        <v-col><router-link :to="{ name: 'Home' }">
            <v-btn text color="white">Home</v-btn>
          </router-link>
        </v-col>
        <v-col><router-link :to="{ name: 'Products' }">
            <v-btn  text color="white">Products</v-btn>
          </router-link>
        </v-col>
        <v-col><router-link :to="{ name: 'Rentals' }">
            <v-btn  text color="white">Rentals</v-btn>
          </router-link>
        </v-col>
        <v-col><router-link :to="{ name: 'About' }">
            <v-btn  text color="white">About</v-btn>
          </router-link>
        </v-col>
        <v-col><router-link :to="{ name: 'Contact' }">
            <v-btn  text color="white">Contact</v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>
  //
</script>
