module.exports = {
  env: {
    browser: true,
    es2021: true,
    mocha: true,
  },
  overrides: [
    {
      files: ['test/**', '*.config.js'],
      env: {
        node: true,
      },
    },
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:cypress/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/no-deprecated': 'off',
  },
}
