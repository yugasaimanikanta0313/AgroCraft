import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import path from "node:path"; // ✅ Import path module

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  server: {
    port: 3000, // ✅ Set the port
    host: "0.0.0.0", // ✅ Allow external access (important for ngrok)
    allowedHosts: ["all"], // ✅ Allow all external hosts, including ngrok
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "tailwindcss";
// import autoprefixer from "autoprefixer";
// import path from "node:path"; // ✅ Import path module

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   css: {
//     postcss: {
//       plugins: [tailwindcss(), autoprefixer()],
//     },
//   },
//   server: {
//     port: 3000, // Change the port here
//   },
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });
