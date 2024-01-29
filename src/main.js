import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import routes from "~pages";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import PrimeVue from "primevue/config";
import Button from "primevue/button";

export const createApp = ViteSSG(App, { routes, base: import.meta.env.BASE_URL }, ({ app }) => {
	// install all modules under `modules/`
	app.use(PrimeVue);
	app.component("Button", Button);
});
