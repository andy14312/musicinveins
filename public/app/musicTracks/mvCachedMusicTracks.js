angular.module('app').factory('mvCachedMusicTracks',function(mvMusicTrack){
    var cachedMusicTracks;
    return {
        query: function(){
            if(!cachedMusicTracks) {
                cachedMusicTracks = mvMusicTrack.query();
            }
            return cachedMusicTracks;
        }
    }
});
