module.exports = function() {
  // Nuxtで.ts/.tsxファイルを解決させる
  this.nuxt.options.extensions.push('ts', 'tsx')
  // Webpackの設定
  this.extendBuild(config => {
      // .ts/.tsxをビルドできるようにts-loaderを追加する。
      config.module.rules.push({
          test: /\.tsx?$/,
          exclude: /(node_modules)/,
          loader: 'ts-loader',
          options: {
              appendTsSuffixTo: [/\.vue$/]
          }
      })
      // Webpackのextensionsに.tsが入っていない場合解決できるようにする
      if (!config.resolve.extensions.includes('.ts')) {
          config.resolve.extensions.push('.ts')
      }
      // Webpackのextensionsに.tsxが入っていない場合解決できるようにする
      if (!config.resolve.extensions.includes('.tsx')) {
          config.resolve.extensions.push('.tsx')
      }
  })
}
