<template>
  <v-app-bar color="primary">
    <v-container>

      <v-row>
        <v-col><router-link :to="{ name: 'Home' }">
            <v-btn text color="white">Home</v-btn>
          </router-link>
        </v-col>
        <v-col><router-link :to="{ name: 'Products' }">
            <v-btn text color="white">Products</v-btn>
          </router-link>
        </v-col>
        <v-col><router-link :to="{ name: 'Rentals' }">
            <v-btn text color="white">Rentals</v-btn>
          </router-link>
        </v-col>
        <v-col><router-link :to="{ name: 'Info' }">
            <v-btn text color="white">Info</v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>
  //
</script>
