module.exports = {
  extends: ['react-app', 'react-app/jest', 'plugin:prettier/recommended'],
  ignorePatterns: ['src/gen/**/*'],
  plugins: ['prettier'],
  rules: {
    'no-restricted-imports': ['error', { patterns: ['./', '../', '.'] }],
    'prettier/prettier': 'error',
    'react-hooks/exhaustive-deps': ['error'],
  },
}
