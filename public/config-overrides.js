const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = function override(config, env) {
  config.plugins.push(new MonacoWebpackPlugin({
    languages: ['json' , 'javascript' , 'html' , 'css' , 'ini' , 'dockerfile' , 'csharp' , 'json' , 'typescript' , 'sql' , 'yaml' , 'java' , 'python' , 'markdown']
  }));
  return config;
}