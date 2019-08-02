module.exports = {
  env: {
    es6: true,
    node: true
  },

  extends: 'airbnb-base',

  parserOptions: {
    ecmaVersion: 2018
  },

  rules: {
    'arrow-parens': ['error', 'always'],
    'no-await-in-loop': 'off',

    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ],

    'no-unused-vars': ['error', { argsIgnorePattern: '^_+$' }]
  }
};