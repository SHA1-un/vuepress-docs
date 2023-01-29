import { defineClientConfig } from "@vuepress/client";
import { defineAsyncComponent, h } from "vue";
import { hasGlobalComponent } from "/home/shaun/Documents/Personal/VuePress/vuepress-docs/node_modules/vuepress-shared/lib/client/index.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    if (!hasGlobalComponent("AutoCatalog", app))
      app.component("AutoCatalog", () =>
        h(
          defineAsyncComponent(
            () =>
              import("/home/shaun/Documents/Personal/VuePress/vuepress-docs/node_modules/vuepress-plugin-components/lib/client/components/Catalog.js")
          ),
          {
            titleGetter: (meta) => meta["t"],
            iconGetter: (meta) => meta["i"],
            orderGetter: (meta) => meta["O"],
            shouldIndex: (meta) => Boolean(meta["I"]),
          }
        )
      );
  },
});
