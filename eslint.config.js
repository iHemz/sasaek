import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

export default [
  eslintConfigPrettier,
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true, tsx: true },
        sourceType: "module",
      },
    },
    extends: ["prettier"],
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    parserOptions: {
      projects: "./tsconfig.json",
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      // "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "react/react-in-jsx-scope": "off",
      "import/extensions": "off",
      "@typescript-eslint/quotes": ["error", "double"],
      "@typescript-eslint/no-unused-vars": "off",
      "linebreak-style": 0,
      "no-console": "off",
      "no-async-promise-executor": "off",
      "no-unsafe-optional-chaining": "off",
      "no-unused-vars": "off",
      "nonblock-statement-body-position": "off",
      "consistent-return": "off",
      "no-plusplus": "off",
    },
  },
];
