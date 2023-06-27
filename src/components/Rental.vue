<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="align-end text-white" height="300" src='@/assets/tent.jpg' cover>
      <v-card-title>Elegant 26 ft x 19 ft Party Tent </v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      $200
    </v-card-subtitle>

    <v-card-text>
      <div>Large enough to fit 40+ people.</div>

      <div>Setup and takedown included.</div>
    </v-card-text>

    <v-card-actions>

      <v-btn class="ma-2" color="primary" @click="sendEmail">Rent</v-btn>

      <!-- <v-btn color="primary">
          Share
        </v-btn> -->
    </v-card-actions>
  </v-card>
  <v-card class="mx-auto mt-12" max-width="400">
    <!-- <v-img class="align-end text-white" height="300" src='@/assets/bench.jpg' cover>
      <v-card-title>Picnic Table</v-card-title>
    </v-img> -->

    <v-card-title>Tables</v-card-title>
    <v-card-subtitle class="pt-4">
      $TBD
    </v-card-subtitle>

    <v-card-text>

    </v-card-text>

    <v-card-actions>
      <v-btn color="primary">
        Coming Soon
      </v-btn>

      <!-- <v-btn color="primary">
          Share
        </v-btn> -->
    </v-card-actions>
  </v-card>
  <v-card class="mx-auto mt-12" max-width="400">
    <!-- <v-img class="align-end text-white" height="300" src='@/assets/bench.jpg' cover>
      <v-card-title>Picnic Table</v-card-title>
    </v-img> -->

    <v-card-title>Chairs</v-card-title>
    <v-card-subtitle class="pt-4">
      $TBD
    </v-card-subtitle>

    <v-card-text>

    </v-card-text>

    <v-card-actions>
      <v-btn color="primary">
        Coming Soon
      </v-btn>

      <!-- <v-btn color="primary">
          Share
        </v-btn> -->
    </v-card-actions>
  </v-card>
</template>
  
<script setup>

function sendEmail() {
  window.location.href = 'mailto:info@rocasolida.tech';
}


</script>
<style></style>