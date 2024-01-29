import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import resolve from "@rollup/plugin-node-resolve";

const customResolver = resolve({
	extensions: [".esm.js", ".css", ".scss"],
});

export default defineConfig({
	plugins: [
		vue(),
		Pages({
			extensions: ["vue", "md"],
		}),
	],
	ssgOptions: {
		script: "async",
		formatting: "prettify",
	},
	resolve: {
		alias: [
			{
				find: "primevue",
				customResolver: customResolver,
				replacement: function (alias) {
					return alias;
				},
			},
		],
	},
});
