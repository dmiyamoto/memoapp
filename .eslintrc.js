module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs'
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'typescript/no-var-requires': 'off',
    'typescript/no-non-null-assertion': 'off',
    'typescript/explicit-function-return-type': 'off',
    'typescript/no-angle-bracket-type-assertion': 'off'
  },
  overrides: [
    {
        files: ["*.ts", "*.vue"],
        parserOptions: {
            parser: "typescript-eslint-parser"
        },
        plugins: ['vue', 'prettier', 'typescript']
    }
  ]
}
