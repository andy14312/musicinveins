var logger = require('morgan'),
    bodyParser = require('body-parser'),
    stylus = require('stylus'),
    express = require('express'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport');

module.exports = function(app,config) {
    function compile(str,path) {
        return stylus(str).set('filename',path);
    };

    app.set('views',config.rootPath+'/server/views');
    app.set('view engine','jade');
    app.use(stylus.middleware({
        src: config.rootPath + '/public',
        compile: compile
    }));

    app.use(express.static(config.rootPath + '/public')); //to help express serve static files from our specified public folder
    app.use(logger('dev'));
    app.use(cookieParser());
    app.use(session({secret:'music in veins',resave:false,saveUninitialized:false}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
}
