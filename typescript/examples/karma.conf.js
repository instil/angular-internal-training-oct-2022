const webpackConfig = require('./webpack.config');

module.exports = function(config) {
    config.set({
        frameworks: ['jasmine', 'webpack'],
        browsers: ['Chrome'],
        files: [
            'src/**/*.spec.ts'
        ],
        preprocessors: {
            '**/*.ts': ['webpack']
        },
        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-webpack',
            'karma-spec-reporter'
        ],
        reporters: [
            'spec'
        ],
        webpack: {
            devtool: webpackConfig.devtool,
            mode: 'development',
            module: webpackConfig.module,
            resolve: webpackConfig.resolve
        },
        webpackMiddleware: {
            logLevel: 'error'
        }
    });
};
