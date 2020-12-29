const packageinfo = require('./package.json')

module.exports = function(api, projectOptions) {
    console.log(packageinfo, '---------');
    // 添加别名 ====> som-ui
    api.configureWebpack(webpackConfig => {
        // webpackConfig.resolve.alias['som-ui'] = '@souche-ui/som-ui';
    });

    // 添加新的命令
    api.registerCommand(
        'greet',
        {
          description: 'description Write a greeting to the console',
          usage: 'usage:  vue-cli-service greet'
        },
        function() {
          console.log(`👋greet SUNbridger  Hello`)
        }
    );
};
