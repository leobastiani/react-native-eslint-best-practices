module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:react-native-a11y/all',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    '@react-native-community',
  ],
  plugins: [
    '@typescript-eslint',
    'jsx-a11y',
    'jest',
    'simple-import-sort',
    'import',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    // react-native does not work well with eslint import plugin
    // https://github.com/facebook/react-native/issues/28549#issuecomment-657249702
    'import/ignore': ['node_modules/react-native/index\\.js$'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    // set on @react-native-community as error by default
    // although void is okay because we are using no-floating-promises
    'no-void': 'off',

    // theses rules came from eslint-plugin-simple-import-sort example
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
};
