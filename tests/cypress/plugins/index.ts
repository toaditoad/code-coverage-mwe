/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */

/// <reference types="cypress" />

const cypressWebpackPreprocessor = require('@cypress/webpack-preprocessor');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const webpackOptions = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader'],
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules|\.d\.ts$/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.d\.ts$/,
                loader: 'ignore-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
    },
    plugins: [new VueLoaderPlugin()],
};

const options = {
    webpackOptions,
    watchOptions: {},
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
module.exports = (on: any, config: any) => {
    const coverage = process.env.COVERAGE === 'true';

    if (coverage) {
        require('@cypress/code-coverage/task')(on, config);
        on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));
    }

    on('file:preprocessor', cypressWebpackPreprocessor(options));

    return {
        ...config,
        env: {
            ...config.env,
            coverage,
        },
    };
};
