<template>
    <v-sheet height="200px" color="transparent" />
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
</template>
  
<script setup>

function sendEmail() {
    window.location.href = 'mailto:info@rocasolida.tech';
}


</script>
  
<style scoped>
/* Add your styles here */
</style>