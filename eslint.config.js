// eslint.config.js
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
});
