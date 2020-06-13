import Vue from "vue";
import App from "./src/App.vue";
import singleSpaVue from "single-spa-vue";

Vue.config.productionTip = false;

const vueLifeCycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
  },
});

export const bootstrap = vueLifeCycles.bootstrap;
export const mount = vueLifeCycles.mount;
export const unmount = vueLifeCycles.unmount;
