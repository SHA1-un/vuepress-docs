import { defineClientConfig } from "@vuepress/client";

import CommonWrapper from "@theme-hope/components/CommonWrapper";
import HomePage from "@theme-hope/components/HomePage";
import NormalPage from "@theme-hope/components/NormalPage";
import Navbar from "@theme-hope/modules/navbar/components/Navbar";
import Sidebar from "@theme-hope/modules/sidebar/components/Sidebar";
import Layout from "/home/shaun/Documents/Personal/VuePress/vuepress-docs/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js";
import NotFound from "/home/shaun/Documents/Personal/VuePress/vuepress-docs/node_modules/vuepress-theme-hope/lib/client/layouts/NotFound.js";

import { useScrollPromise } from "@theme-hope/composables/index";
import { injectDarkmode, setupDarkmode } from "@theme-hope/modules/outlook/composables/index";
import { setupSidebarItems } from "@theme-hope/modules/sidebar/composables/index";

import "/home/shaun/Documents/Personal/VuePress/vuepress-docs/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";

import GlobalEncrypt from "@theme-hope/modules/encrypt/components/GlobalEncrypt";
import LocalEncrypt from "@theme-hope/modules/encrypt/components/LocalEncrypt";
import Slide from "/home/shaun/Documents/Personal/VuePress/vuepress-docs/node_modules/vuepress-theme-hope/lib/client/layouts/Slide.js";


export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
    
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    
  },
  layouts: {
    Layout,
    NotFound,
    Slide,
    
  }
});