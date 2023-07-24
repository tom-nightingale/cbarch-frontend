// module.exports = {
//   root: true,
//   extends: ["eslint:recommended", "plugin:svelte/recommended", "prettier"],
//   parserOptions: {
//     sourceType: "module",
//     ecmaVersion: 2020,
//     extraFileExtensions: [".svelte"],
//   },
//   env: {
//     browser: true,
//     es2017: true,
//     node: true,
//   },
// };

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:storybook/recommended",
  ],
  plugins: ["svelte3", "@typescript-eslint"],
  ignorePatterns: ["*.cjs"],
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
  settings: {
    "svelte3/typescript": () => require("typescript"),
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
};
