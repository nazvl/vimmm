import js from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import { defineConfig } from 'eslint/config';
import prettierPlugin from 'eslint-plugin-prettier';
import pluginSimpleSort from 'eslint-plugin-simple-import-sort';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores([
    '**/dist/**',
    '**/dist-ssr/**',
    '**/coverage/**',
    '**/dev-dist/**',
    '**/.vite/**',
    '**/node_modules/**',
  ]),
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginVue.configs['flat/essential'],
  {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  {
    plugins: {
      'simple-import-sort': pluginSimpleSort,
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^node:'], // Node.js builtins
            ['^vue', '^@?\\w'], // external libs
            ['^@/'], // алиасы
            ['^\\.\\.'], // родительские пути
            ['^\\.'], // relative
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      'prettier/prettier': 'error',
    },
  },
]);
