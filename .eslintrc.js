module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  root: true,
  rules: {
    'function-paren-newline': ['error', 'never'],
    'function-call-argument-newline': ['error', 'never'],
    'padded-blocks': ['error', 'always', { allowSingleLineBlocks: true }],
    indent: ['error', 2]
  }
}
