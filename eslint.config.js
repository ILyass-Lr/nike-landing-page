import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  // Ignore patterns
  globalIgnores(['dist', '.eslintrc.cjs']),

  {
    // Apply to JS/TS/React files
    files: ['**/*.{js,jsx,ts,tsx}'],

    // Extends from equivalent modern configs
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      react.configs.recommended,           // replaces "plugin:react/recommended"
      react.configs['jsx-runtime'],        // replaces "plugin:react/jsx-runtime"
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },

    // React version setting
    settings: {
      react: { version: '19.1.1' },
    },

    // Plugins (needed for custom rules below)
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },

    // Rules from old config
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/prop-types': 'off',
    },
  },
])
