import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "/home/shaun/Documents/Personal/VuePress/vuepress_theme_hope/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "/home/shaun/Documents/Personal/VuePress/vuepress_theme_hope/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});
