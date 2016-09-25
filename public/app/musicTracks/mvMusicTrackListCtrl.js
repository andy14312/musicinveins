angular.module('app').controller('mvMusicTrackListCtrl',function($scope,mvCachedMusicTracks){
     $scope.musicTracks = mvCachedMusicTracks.query();
    $scope.sortOptions = [{value: "title",text: "Sort by title"},
                         {value: "added",text: "Sort by track added date"}];
    $scope.sortOrder = $scope.sortOptions[0].value
;});
