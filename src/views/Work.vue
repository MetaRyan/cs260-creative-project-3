<template>
  <div class="work">
    <v-container
      >
        <Waterfall 
          :options="options">
          <WaterfallItem
            v-for="image in images" 
            :key="image.id"
            class="col-lg-3 col-md-4 col-sm-6 col-xs-12 item">
            <router-link :to="'/art/'+ image.id">
              <img 
                :src="'/images/'+image.src"
                />
            </router-link>
          </WaterfallItem>
        </Waterfall>
      </v-container>
  </div>
</template>

<script>

import {Waterfall, WaterfallItem} from 'vue2-waterfall';

export default {
  name: 'Work',
  components: {
    Waterfall,
    WaterfallItem
  },
  data() {
    return {
      options: {
 
      }
    };
  },
  computed: {
    images() {
      return this.$root.$data.art;
    }
  }
}
</script>

<style scoped>
  .item {
    margin-bottom: 15px;
  }
  .item img {
    border-radius: 5px;
    display: inline-block;
    width: 100%;
  }
</style>