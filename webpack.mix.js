const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')

mix.js('resources/assets/js/app.js', 'public/js')
  .sass('resources/assets/sass/app.scss', 'public/css')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.js') ]
  })
  .webpackConfig({
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
        }
      ]
    }
  })
  .setPublicPath('public')
