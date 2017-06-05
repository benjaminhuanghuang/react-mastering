# react
    $npm install --save react react-dom

# browserify
    browserify与webpack都是当下流行的commonjs模块(或es6模块)合并打包工具，打包后的js文件可以直接运行在浏览器环境中。
    $npm install -g browserify
    
    babelify为Browserify添加了babel的支持
    $npm install --save-dev babelify babel-preset-es2015 babel-preset-react
    
    Add npm script
    "build": "browserify src/main.js -t [ babelify --presets [ es2015 react ] ] --outfile public/bundle.js"