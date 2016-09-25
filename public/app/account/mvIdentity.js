angular.module('app').factory('mvIdentity',function($window,mvUser){
    var currentUser;
    if(!!$window.bootstrappedUserObj) {
        currentUser = new mvUser();
        angular.extend(currentUser,$window.bootstrappedUserObj);
    }
    return {
        currentUser: currentUser,
        isAuthenticated: function(){
            return !!this.currentUser;
        },
        isAuthorized: function(role) {
            return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1
        }
    } 
});