angular.module('app').controller('mvMainCtrl',function($scope,mvCachedMusicTracks,mvIdentity){
    $scope.musicTracks = mvCachedMusicTracks.query();
    $scope.identity = mvIdentity;
});
