angular.module('app').controller('mvUserListCtrl',function(mvUser,$scope){
    $scope.users = mvUser.query();
}); 