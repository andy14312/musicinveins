var app = angular.module('app', ['ngResource', 'ngRoute']);
angular.module('app').config(function ($routeProvider, $locationProvider) {
    var routeRoleChecks = {
        'admin': {
            auth: function (mvAuth) {
                return mvAuth.authorizeCurrentUserForRoute('admin');
            }
        },
        'user' : {
            auth: function(mvAuth) {
                return mvAuth.authorizeAuthenticatedUserForRoute();
            }
        }
    }
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {
        templateUrl: '/partials/main/main'
        , controller: 'mvMainCtrl'
    });
    $routeProvider.when('/profile', {
        templateUrl: '/partials/account/profile'
        , controller: 'mvProfileCtrl',
        resolve: routeRoleChecks.user
    });
    $routeProvider.when('/admin/users', {
        templateUrl: '/partials/admin/user-list'
        , controller: 'mvUserListCtrl'
        , resolve: routeRoleChecks.admin
    });
    $routeProvider.when('/signup', {
        templateUrl: '/partials/account/signup',
        controller: 'mvSignupCtrl'
    });
    $routeProvider.when('/musicTracks',{
        templateUrl: '/partials/musicTracks/music-track-list',
        controller: 'mvMusicTrackListCtrl',
        resolve: routeRoleChecks.user
    });
});
app.controller('profile', function () {
    this.name = 'Anand Mutyala';
    this.profession = 'Interactive Developer';
});
//run is called after the module 'app' has been completely configured, which means after all the above code is executed
//rootScope to listen to the route changer events
angular.module('app').run(function ($rootScope, $location) {
    //listening to routeChangeError event which is triggered when a route is rejected
    //four params - event,current route,previous route, rejection reason
    $rootScope.$on('$routeChangeError', function (e, current, previous, rejection) {
        if (rejection === 'not authorised') {
            $location.path('/');
        }
    });
});
