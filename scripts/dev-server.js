/* eslint-disable no-console */
import colors from 'colors';
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const getConfig = require('../webpack.config');

const webpackDevHost = 'localhost';

import once from './once';
import app from './app-server';
const startApp = once(app.listen);

const serve = (webpackDevPort, callback) => {
  const appPort = webpackDevPort + 1;
  const config = getConfig(webpackDevPort);
  const compiler = webpack(config);
  compiler.plugin('done', () => {
    startApp(appPort);
    console.log('Webpack build finished'.cyan);
  });

  const webpackDevServer = new WebpackDevServer(
    compiler,
    {
      stats: { colors: true },
      noInfo: true,
      hot: true,
      historyApiFallback: true,
      publicPath: config.output.publicPath,
      contentBase: config.output.path,
      proxy: {
        "**": `http://${webpackDevHost}:${appPort}`
      }
    }
  );

  webpackDevServer.listen(
    webpackDevPort,
    webpackDevHost,
    callback
  );
};

serve(8080, (err, res) => {
  if (err) console.log(err);
});