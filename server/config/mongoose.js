var mongoose = require('mongoose'),
    crypto = require('crypto'),
    userModel = require('../models/User'),
    musicTrackModel = require('../models/MusicTrack');


module.exports = function(config){
    mongoose.connect(config.db);
    mongoose.set('debug',true);
    var db = mongoose.connection;
    db.on('error',console.error.bind(console, 'Connection error...'));
    db.once('open',function callback(){
        console.log('musicinveins db opened');
    });

    userModel.createDefaultUsers();

    musicTrackModel.createDefaultMusicTracks();
}
