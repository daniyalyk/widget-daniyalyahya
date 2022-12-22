const path = require("path");

module.exports = function override(config, env) {
  return {
    ...config,
    output: {
      filename: "static/js/my-widget.js",
      chunkFilename: "static/js/my-widget.[name].js",
      path: "D:\\FRT\\widgetTest-daniyalyahya\\widgetTest-daniyalYahya\\widgettest-daniyalyahya\\build",
      pathinfo: false,
      publicPath: "/",
      chunkLoadingGlobal: "webpackJsonpmy-embeddable-widget",
      globalObject: "this",
    },
  };
};
