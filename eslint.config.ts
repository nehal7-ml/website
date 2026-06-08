import { defineConfig, globalIgnores } from "eslint/config";

import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist", "node_modules", "public", ".astro"]),
  // Base TypeScript configurations
  ...tseslint.configs.recommended,

  // Astro configurations
  ...eslintPluginAstro.configs.recommended,
  // ...eslintPluginAstro.configs["jsx-a11y-recommended"],

  // Custom rule overrides
  {
    rules: {
      // You can add custom rule modifications here if needed
    },
  },
]);
