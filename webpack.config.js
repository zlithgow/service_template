module.exports = {
    entry: {
        index: "./js/index.js",
        page1: "./js/page1.js",
        page2: "./js/page2.js"
    },
    output: {
        path: __dirname,
        filename: "./dist/[name].bundle.js"
    }
};