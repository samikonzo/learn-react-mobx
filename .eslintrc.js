module.exports = {
  "extends": "eslint:recommended",

  /* parserOptions:{
    sourceType: 'module'
  }, */

  parser: 'babel-eslint',

  plugins:[
    'babel',
    'flowtype',
    'react'
  ],

  env: {
    browser: true,
    es6: true
  },
  "rules": {
      // enable additional rules
      "indent": ["error", 4],
      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],

      // override default options for rules from base configurations
      "comma-dangle": ["error", "always"],
      "no-cond-assign": ["error", "always"],

      // disable rules from base configurations
      "no-console": "off",


      'no-multi-spaces': 1,
  }
}
