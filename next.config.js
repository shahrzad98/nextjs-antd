const DashboardPlugin = require('webpack-dashboard/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;




const path = require('path')
const fs = require('fs')

function moduleDir(m) {
    return path.dirname(require.resolve(`${m}/package.json`))
}


module.exports = {
    distDir: 'build',

    // serverRuntimeConfig: {
    //     // Will only be available on the server side
    //     mySecret: 'secret',
    //     secondSecret: process.env.SECOND_SECRET, // Pass through env variables
    // },
    // publicRuntimeConfig: {
    //     // Will be available on both server and client
    //     staticFolder: '/' ,
    // },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.resolve.extensions = ['.web.js', '.js', '.json']

        config.module.rules.push(
            {
                test: /\.(svg)$/i,
                loader: 'emit-file-loader',
                options: {
                    name: 'dist/[path][name].[ext]'
                },
                include: [
                    moduleDir('antd-mobile'),
                    __dirname
                ]
            },
            {
                test: /\.(svg)$/i,
                loader: 'svg-sprite-loader',
                include: [
                    moduleDir('antd-mobile'),
                    __dirname
                ]
            }
        )
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        // Important: return the modified config

        // Example using webpack option
        config.plugins.push(new DashboardPlugin(),
            // new BundleAnalyzerPlugin()
        );
        return config;
    },
    webpackDevMiddleware: config => {
        // Perform customizations to webpack dev middleware config
        // Important: return the modified config
        return config;
    },
};


