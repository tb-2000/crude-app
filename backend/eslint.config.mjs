import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,

  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,     // falls React / Browser-Code
        ...globals.node,        // falls du node-globals brauchst
      },
      ecmaVersion: 2022,
      sourceType: "module",     // ← das ist fast immer richtig für React/Vite/Create-React-App
    },
    rules: {
      "no-console": "off",
      "no-undef": "error",
      // ... deine Regeln
    },
  },

  {
    // Ignorieren – gilt global
    ignores: ["node_modules/**", "dist/**", "build/**", ".vite/**"],
  },
];