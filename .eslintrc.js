module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', , '@typescript-eslint', 'import', 'prettier'],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // first of all import builtin modules like fs, path, etc..
          'external', // then third party libraries like lodash etc..
          'internal', // then our internal absolute imports
          'index', // then relatively import something from current directory
          'sibling', // then relatively import something inside nested directory of current directory
          'parent', // then relatively import some thing from parent directory
          'object', // lastly object if any,
          'unknown',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
}
