const DashboardPlugin = require('webpack-dashboard/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;




const path = require('path')
const fs = require('fs')

function moduleDir(m) {
    return path.dirname(require.resolve(`${m}/package.json`))
}


module.exports = {
    distDir: 'build',

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

        config.plugins.push(new DashboardPlugin(),
            // new BundleAnalyzerPlugin()
        );
        return config;
    },

};


