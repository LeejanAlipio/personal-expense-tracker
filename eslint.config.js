import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended', eslintConfigPrettier],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'prefer-const': 'error',
      eqeqeq: 'error',
    },
  },
]);
