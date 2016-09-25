angular.module('app').factory('mvMusicTrack',function($resource){
     var MusicTrackResource = $resource('/api/musicTracks/:id',{_id: "@id"},{update: {method: 'PUT',isArray:false}});
    return MusicTrackResource;
});
