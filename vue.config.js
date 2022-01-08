module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "./src/assets/scss/style.scss";`
            }
        }
    },
    publicPath: './',
    outputDir: 'dist',
    assetsDir:'static',
    indexPath:'index.html'
}