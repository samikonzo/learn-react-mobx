module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:flowtype/recommended"
  ],

  "parser": 'babel-eslint',

  "plugins":[
    'babel',
    'flowtype',
    'react'
  ],

  "env": {
    browser: true,
    es6: true
  },
  "rules": {
      // enable additional rules
      "indent": ["error", 4],
      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "double"],
      "semi": ["error", "never"],

      // override default options for rules from base configurations
      "comma-dangle": ["error", "never"],
      "no-cond-assign": ["error", "always"],

      // disable rules from base configurations
      "no-console": "off",


      /* custom rules */

      // disable multispaces
      'no-multi-spaces': 1,

      'indent': ["error", 2, { "VariableDeclarator": { "var": 2, "let": 2, "const": 3 } }],

      // react/jsx
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/no-unused-prop-types': 'error',
      'react/prop-types': 'error',
      'react/no-unused-state': 'error'
  },

  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    }
  }
}
