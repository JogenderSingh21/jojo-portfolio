import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'
import { defineConfig, globalIgnores } from 'eslint/config'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTypescript,
  prettier,
  {
    rules: {
      // Prettier compatibility - let Prettier handle formatting
      semi: ['error', 'never'],
      quotes: [
        'error',
        'single',
        { avoidEscape: true, allowTemplateLiterals: true },
      ],

      // JSX quotes - allow double quotes in JSX attributes
      'jsx-quotes': ['error', 'prefer-double'],

      // TypeScript specific
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',

      // React specific - very relaxed rules
      'react/jsx-curly-brace-presence': 'off', // Allow curly braces for clarity
      'react/self-closing-comp': 'off', // Disable to avoid conflicts
      'react/jsx-sort-props': 'off', // Disable strict prop sorting
      'react/jsx-no-comment-textnodes': 'off', // Allow comments in JSX

      // General code quality - relaxed
      'no-console': 'warn',
      'prefer-const': 'warn',
      'no-var': 'error', // Keep this as error
      'object-shorthand': 'warn',
      'prefer-template': 'warn',

      // Import organization - disabled to avoid conflicts with Prettier
      'import/order': 'off', // Let Prettier handle import organization
      'sort-imports': 'off', // Disable built-in sort-imports
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
])

export default eslintConfig
