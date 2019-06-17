var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    https: true //Change this to true when testing on a server
}).listen(5000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at https://localhost:5000/');
});
