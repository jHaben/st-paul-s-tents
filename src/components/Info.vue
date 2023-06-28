<template>
    <v-container>
        <v-sheet color="transparent" height="50" />

        <v-row class="d-flex">
            <v-col />
            <v-col class="justify-center align-center about" cols="4">

                Hello and Welcome to St. Paul's Tents and More where we provide party rentals
                and outdoor furniture, from picnic tables to large beautiful tents for your party. Our products for purchase are
                handcrafted here in St. Paul, MN. Our rental program comes with help setting up and taking down so you don't
                have to worry and can focus on your party.
            </v-col>
            <v-col />
        </v-row>

        <div class="d-flex align-center flex-column text-center">
        <v-card class="ma-16" elevation="0" width="600" color="primary">
            <v-card-item>

                <v-card-title></v-card-title>
                <v-btn class="ma-2" @click="sendEmail">Send us an email <v-icon color="primary" size="xx-large">mdi-email</v-icon></v-btn>
                <v-card-title> </v-card-title>
                <!-- <v-row justify="center" class="ma-4">
            <v-btn elevation="2" icon outlined class="emailBtn ma-2 text4"
              style="font-size: 20px; background-color: white" rounded size="x-large" target="_blank"
              href="https://twitter.com/rocaSolidaTech">
              <v-icon color="primary" size="50">
                {{ "mdi-twitter" }}</v-icon></v-btn>
  
                <v-btn elevation="2" icon outlined class="emailBtn ma-2 text4"
              style="font-size: 20px; background-color: white" rounded size="x-large" target="_blank"
              href="https://wa.me/6514421267">
              <v-icon color="primary" size="50">
                {{ "mdi-whatsapp" }}</v-icon></v-btn>
                <v-btn elevation="2" icon outlined class="emailBtn ma-2 text4"
              style="font-size: 20px; background-color: white" rounded size="x-large" target="_blank"
              href="https://www.facebook.com/RocaSolidaTech">
              <v-icon color="primary" size="50">
                {{ "mdi-facebook" }}</v-icon></v-btn>
          </v-row> -->
                <v-card-title> St. Paul, MN </v-card-title>
            </v-card-item>
        </v-card>
    </div>
    </v-container>
</template>

  
<script setup>

function sendEmail() {
    window.location.href = 'mailto:info@rocasolida.tech';
}


</script>

<style>
.about {

    font-size: 24px;
}
</style>