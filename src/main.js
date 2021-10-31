import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "../config/routes";
import { formatRoute } from "../config/resolveRoute";

Vue.config.productionTip = false;
Vue.use(VueRouter);

console.log(formatRoute(routes));

const router = new VueRouter({
	routes: formatRoute(routes),
	mode: "history",
});

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
