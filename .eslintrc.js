module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  rules: {
    'react/prop-types': 1,
		radix: 0,
		'react/react-in-jsx-scope':0,
		'jsx-a11y/anchor-is-valid':0,
    'react/no-string-refs': 0,
    'react/jsx-max-props-per-line': 1,
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': 0,
    'class-methods-use-this': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'prefer-destructuring': 0,
    'react/destructuring-assignment': 0,
    'no-unused-vars': 1,
    'import/extensions': 0,
    'import/order': 1,
    'react/prefer-stateless-function': 0,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'consistent-return': 0,
    'no-console': 0,
    'import/no-useless-path-segments': 0,
    'import/prefer-default-export': 0,
    'react/jsx-uses-vars': 2,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-first-prop-new-line': 1,
    'import/newline-after-import': 0,
    'func-names': 0,
    'object-shorthand': 0,
    camelcase: 0,
    'import/order': 0,
    'react/self-closing-comp': 0,
    'no-restricted-syntax': 0,
    'no-underscore-dangle': 0,
    'no-shadow': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  plugins: ['prettier'],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};
