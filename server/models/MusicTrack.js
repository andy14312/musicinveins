var mongoose = require('mongoose');
var MusicTrackSchema = mongoose.Schema({
    title: {
        type: String
        , required: '{PATH} is required!'
    }
    , added: {
        type: Date
        , required: '{PATH} is required!'
    }
    , tags: [String],
    videoUrl: {
      type: String
    }
});
var MusicTrack = mongoose.model('MusicTrack', MusicTrackSchema);

exports.createDefaultMusicTracks = function () {
    MusicTrack.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            MusicTrack.create({
                title: 'Dark Horse'
                , added: new Date('08/15/2016'),
                videoUrl: "https://youtu.be/0KSOMA3QBU0?list=PLSTz8jpJdr5qrbVEburBasItcSBO43xPv"
            });
            MusicTrack.create({
                title: 'Bailando'
                , added: new Date('05/15/2016')
                , tags: ['enrique', 'espanol'],
                videoUrl: "https://youtu.be/NUsoVlDFqZg?list=PLSTz8jpJdr5qrbVEburBasItcSBO43xPv"
            });
        }
    });
}
