//Require babel to transpile before our tests run
require('babel-register')();

//Disable webpack that mocha does not understands
require.extensions['.css']=function(){};
