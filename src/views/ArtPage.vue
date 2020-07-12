<template>
  <div class="art-page">
    <v-container fluid>
      <v-row>
        <v-col
          align="center">
          <h1>About Christy</h1>
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="center">
        <v-col
          xs="12"
          sm="8"
          md="6"
          lg="6"
          xl="4">
          <img 
            :src="'/images/'+image.src"
            />
        </v-col>
      </v-row>
      <v-row>
        <v-col 
          align="center">
          <h1>Contact</h1>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'ArtPage',
  components: {

  },
  props: {
    id: Number
  },
  computed: {
    image() {
      return this.$root.$data.art[this.id];
    }
  }
}
</script>