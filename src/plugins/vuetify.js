// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

const opts = {theme: {
    themes: {
      light: {
        primary: '#2D3753',
        secondary: '#2D3753',
        accent: '#3AE3D6',
        error: '#f44336',
        info: '#2d3753',
        success: '#7a904a',
        warning: '#f78012',
      }
    },
  },};

export default new Vuetify(opts)
