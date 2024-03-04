module.exports = {
  plugins: [
    require('autoprefixer'),
    require('@fullhuman/postcss-purgecss')({
      content: ['**/*.html', '**/*.js'],
    }),
    require('cssnano')({ preset: 'default' }),
  ],
};
