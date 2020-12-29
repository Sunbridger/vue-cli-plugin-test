// const recast = require('recast');
// const parser = require("@babel/parser");

module.exports = function(api, options, rootOptions) {
    // 添加 Innovation 依赖
    api.extendPackage({
        // dependencies: {
        //     '@souche-ui/som-ui': '^4.0.0',
        // },
        scripts: {
            greet: 'vue-cli-service greet'
        }
    });

    // api.injectImports(api.entryFile, `import test-router from './test-src/test-router'`);
    // api.postProcessFiles((files) => {
    //     let ast = recast.parse(files[api.entryFile]);

    // });

    // api.render('./template');

};
