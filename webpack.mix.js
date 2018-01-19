const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
const path = require('path')

function resolve (dir) {
  return path.join(`${__dirname}/resources/assets/`, dir)
}

mix.js('resources/assets/js/app.js', 'public/js')
  .sass('resources/assets/sass/app.scss', 'public/css')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.js') ]
  })
  .webpackConfig({
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('js/'),
        '@layout': resolve('js/components/Layout')
      }
    },
    module: {
      rules: [
        {
          test: /.(js|vue)$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          exclude: /node_modules/,
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        },
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [{
            loader: 'babel-loader',
            options: { plugins: ['transform-vue-jsx'] }
          }]
        }
      ]
    }
  })
  .setPublicPath('public')
