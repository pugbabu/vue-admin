module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-trailing-spaces': 'off',
    'no-tabs': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'vue/no-unused-components': 'off',
     // 代码结尾带分号
    'semi': ['error', 'always'],
    'vue/html-self-closing': 'off',
    'vue/name-property-casing': 'off',
    'vue/attribute-hyphenation': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
