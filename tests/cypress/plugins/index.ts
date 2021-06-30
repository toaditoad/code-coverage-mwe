/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */

/// <reference types="cypress" />

const cypressWebpackPreprocessor = require('@cypress/webpack-preprocessor');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const fs = require("fs")
const path = require("path")

const getAllFiles = function(dirPath, arrayOfFiles) {
  var files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      if (!file.match("App.vue") && (file.match(/\.tsx?$/) || file.match(/\.vue?$/))) {
        arrayOfFiles.push(dirPath+ "/"+ file)
        console.log(file)
      }
    }
  })

  return arrayOfFiles
}

// These webpack options are not needed for this minimal working example
// but are relevant for the actual project that suffers the same problem.
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
    additionalEntries: getAllFiles('./src/', [])
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
