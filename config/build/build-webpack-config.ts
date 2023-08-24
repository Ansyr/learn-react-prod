import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./build-plugins";
import {buildLoaders} from "./build-loaders";
import {buildResolves} from "./build-resolves";
import {buildDevServer} from "./build-dev-server";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration{
    const {paths,mode,isDev} = options
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolves(),
        devtool: isDev? 'inline-source-map' : undefined,
        devServer:isDev?  buildDevServer(options) : undefined
    }
}