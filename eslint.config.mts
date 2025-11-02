// eslint.config.js
// ============================================
// 🧠 ESLint Configuration for Expo + React Native + TypeScript
// Keeps code clean, scalable, and consistent across the project
// Base: https://docs.expo.dev/guides/using-eslint/
// ============================================

const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const prettierConfig = require('eslint-config-prettier');

module.exports = defineConfig([
  // --- Base Expo config (includes React Native & TS defaults)
  expoConfig,
  prettierConfig,
  {
    // --- Ignore build artifacts and generated files
    ignores: ['dist/*', 'node_modules/*', '.expo/*'],

    rules: {
      // ==============================
      // ⚙️ General Code Hygiene
      // ==============================

      // Warn if variables or parameters are declared but never used
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],

      // Warn on console.log but allow console.warn and console.error
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // Prevent accidentally leaving debugger statements
      'no-debugger': 'error',

      // Enforce using const/let instead of var
      'no-var': 'error',

      // Suggest using const if a variable is never reassigned
      'prefer-const': 'warn',

      // Enforce strict equality (===) to avoid type coercion bugs
      eqeqeq: ['error', 'always'],

      // ==============================
      // ⚛️ React / JSX Rules
      // ==============================

      // React 17+ auto-imports React, so no need to check for it
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // Warn if JSX elements in lists don’t have a unique key
      'react/jsx-key': 'warn',

      // Prevent duplicate props on a JSX element
      'react/jsx-no-duplicate-props': 'error',

      // Avoid inline `.bind()` in JSX — helps performance
      'react/jsx-no-bind': ['warn', { ignoreRefs: true }],

      // Enforce PascalCase naming for components
      'react/jsx-pascal-case': 'error',

      // Warn for nested components that can cause unnecessary re-renders
      'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],

      // Warn when using array index as key (can break reconciliation)
      'react/no-array-index-key': 'warn',

      // ==============================
      // ⚡ React Hooks Rules
      // ==============================

      // Enforce correct use of React hooks (only call at top level)
      'react-hooks/rules-of-hooks': 'error',

      // Warn if dependency arrays for hooks are incomplete
      'react-hooks/exhaustive-deps': 'warn',

      // ==============================
      // 🧠 Import & File Structure
      // ==============================

      // Keep imports sorted and grouped logically
      'import/order': [
        'warn',
        {
          groups: [
            'builtin', // Node built-ins (fs, path, etc.)
            'external', // npm packages
            'internal', // aliases or local modules
            ['parent', 'sibling', 'index'], // relative imports
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      // ==============================
      // 🧹 Style & Complexity Limits
      // ==============================

      // Warn if a file grows too large
      'max-lines': ['warn', { max: 400, skipComments: true }],

      // Warn if nesting (if/else/loops) goes too deep — keeps code readable
      'max-depth': ['warn', 4],

      // Warn if a function takes too many parameters (refactor to object)
      'max-params': ['warn', 4],

      // Warn if a single function is too long
      'max-statements': ['warn', 50],

      // show warnings for formatting issues
      'prettier/prettier': 'warn',
    },

    // ==============================
    // 🧩 Language & Environment Options
    // ==============================

    languageOptions: {
      ecmaVersion: 2021, // allows modern JS syntax
      sourceType: 'module',
      globals: {
        __DEV__: 'readonly', // allows using __DEV__ in React Native
      },
    },
  },
]);
