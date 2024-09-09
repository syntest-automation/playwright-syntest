import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{ts}"],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginTs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
];
