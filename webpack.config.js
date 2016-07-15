module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      EventButton: 'app/components/btn.jsx',
      Carousel: 'app/components/Carousel.jsx',
      EventPing: 'app/components/ping.jsx',
      SliderItem: 'app/components/CarouselItem.jsx',
      CardList: 'app/components/cardList.jsx',
      applicationStyles: 'app/styles/app.css'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
    devtool: 'cheap-module-eval-source-map'
};
