var path = require('path'),
    rootPath = path.normalize(__dirname+'/../../');
module.exports = {
    development: {
        db: 'mongodb://127.0.0.1/musicinveins',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongodb://anandm:musicinveins@ds041556.mlab.com:41556/musicinveins',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}
