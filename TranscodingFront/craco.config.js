module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            
            webpackConfig.module.rules.push({
                test: /\.html$/,
                use: 'html-loader',
            });

            const myNewWebpackLoader = {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    { loader: require.resolve('babel-loader') },
                    {
                        loader: '@linaria/webpack5-loader',
                    },
                ],
            };
            webpackConfig.module.rules.push(myNewWebpackLoader);

            return webpackConfig;
        },
    },
};
