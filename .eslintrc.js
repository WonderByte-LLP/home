const path = require('path');

const reactLintConfigPath = path.resolve(__dirname, './eslint/configs/react.js');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb', reactLintConfigPath, 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'class-methods-use-this': 0,
    'default-case': [2, { commentPattern: '^skip\\sdefault' }],
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    'import/no-cycle': 0,
    'no-underscore-dangle': 0,
    'no-console': [2, { allow: ['warn', 'error'] }],
    'no-alert': 2,
    'no-debugger': 2,
    'no-use-before-define': 0,
    'no-param-reassign': [
      2,
      {
        props: true,
        ignorePropertyModificationsFor: [
          'draft',
          'draftState',
          'innerDraft',
          'acc',
        ],
      },
    ],
    'prefer-template': 2,
    'require-yield': 0,
  },
};
