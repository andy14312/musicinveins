var MusicTrack = require('mongoose').model('MusicTrack');

exports.getMusicTracks = function(req,res) {
    MusicTrack.find({}).exec(function(err,collection){
        if(err) {
            res.send(500);
        }
        res.send(collection);
    });
}

exports.getMusicTrackById = function(req,res) {
  Course.findOne({_id:req.params.id}).exec(function(err,course){
    if(err) {
      res.send(500);
    }
    console.log('type of course output',typeof course);
    res.send(course);
  });
}
