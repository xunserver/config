module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
    },
  ],
  extends: ['./babel.js', './typescript.js'],
}
