<template>
  <v-app>
    

    <v-app-bar
      app
      clipped-left
      color=#0A7064
      dense
      dark
    >
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Christy Graves</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row
        align="center"
        style="max-width: 650px"
      >
        <v-btn
          to="/"
          large
          text
          v-on="on"
        >
          <span class="white--text">
            Work
          </span>
        </v-btn>
        <v-btn
          to="/about"
          large
          text
          v-on="on"
        >
          <span class="white--text">
            About
          </span>
        </v-btn>
      </v-row>
    </v-app-bar>

    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-btn
                  :href="source"
                  icon
                  large
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer
      color=#0A7064
      app
    >
      <span class="white--text">Find this site's GitHub repository <a href="https://github.com/MetaRyan/cs260-creative-project-3">here</a></span>
    </v-footer>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  props: {
    source: String,
  },
  components: {

  },
};
</script>
