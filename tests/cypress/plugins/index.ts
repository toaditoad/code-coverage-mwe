/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */

/// <reference types="cypress" />

const cypressWebpackPreprocessor = require('@cypress/webpack-preprocessor');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const fs = require('fs');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    let currentArrayOfFiles = arrayOfFiles || [];

    files.forEach((file) => {
        if (fs.statSync(`${dirPath}/${file}`).isDirectory()) {
            currentArrayOfFiles = getAllFiles(
                `${dirPath}/${file}`,
                currentArrayOfFiles
            );
        } else if (
            !file.match('App.vue') &&
            (file.match(/\.tsx?$/) || file.match(/\.vue?$/))
        ) {
            currentArrayOfFiles.push(`${dirPath}/${file}`);
            // eslint-disable-next-line no-console
            console.log(file);
        }
    });

    return currentArrayOfFiles;
}

function addSourcesAsAdditionalEntries() {
    // eslint-disable-next-line no-console
    console.log(
        'Adding the following files as additional entries to the webpack configuration:'
    );
    return getAllFiles('./src/', []);
}

// These webpack options are not needed for this minimal working example
// but are relevant for the actual project that suffers the same problem.
const webpackOptions = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.ts$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader'],
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
    additionalEntries: addSourcesAsAdditionalEntries(),
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
