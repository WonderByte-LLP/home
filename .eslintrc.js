const path = require("path");

const reactLintConfigPath = path.resolve(
  __dirname,
  "./eslint/configs/react.js"
);

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["airbnb", reactLintConfigPath, "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "arrow-body-style": [2, "as-needed"],
    "class-methods-use-this": 0,
    "default-case": [2, { commentPattern: "^skip\\sdefault" }],
    "import/imports-first": 0,
    "import/newline-after-import": 0,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": 0,
    "import/no-unresolved": 0,
    "import/no-webpack-loader-syntax": 0,
    "import/prefer-default-export": 0,
    "import/no-cycle": 0,
    "no-underscore-dangle": 0,
    "no-console": 1,
    "no-alert": 0,
    "no-debugger": 2,
    "no-use-before-define": 0,
    "no-param-reassign": [
      2,
      {
        props: true,
        ignorePropertyModificationsFor: [
          "draft",
          "draftState",
          "innerDraft",
          "acc",
        ],
      },
    ],
    "prefer-template": 2,
    "require-yield": 0,
    "react/require-default-props": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-no-useless-fragment": 0
  },
};
