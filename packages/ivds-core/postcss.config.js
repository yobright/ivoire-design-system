module.exports = ({ env }) => ({
  syntax: require('postcss-scss'),
  plugins: [
    require('@csstools/postcss-sass')({
      silenceDeprecations: ['legacy-js-api', 'import']
    }),
    require('postcss-import')(),
    require('postcss-preset-env')({
      browsers: '> 0.2%, not iOS < 15, not Safari < 14.5, not dead, not op_mini all, not Android >= 0, not and_uc >= 0',
      stage: 3,
      features: {
        'custom-properties': false
      }
    }),
    require('postcss-inline-svg')({
      paths: ['src/svg', 'src/icons'],
      removeFill: true,
      removeStroke: false
    }),
    require('autoprefixer')({
      grid: true
    }),
    env === 'minify'
      ? require('cssnano')({
          preset: [
            'default',
            {
              calc: false,
              discardComments: {
                removeAll: true
              }
            },
          ],
        })
      : false,
  ],
});