function config($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'views/list.html',
            controller: 'listCtrl',
            controllerAs: 'vm'
        })
        .when('/list_packs', {
            templateUrl: 'views/list_packs.html',
            controller: 'listPacksCtrl',
            controllerAs: 'vm'
        })
        .when('/create', {
            templateUrl: 'views/create.html',
            controller: 'createCtrl',
            controllerAs: 'vm'
        })
        .when('/create_packs', {
            templateUrl: 'views/create_packs.html',
            controller: 'createCtrl',
            controllerAs: 'vm'
        })
        .when('/update/:id', {
            templateUrl: 'views/update.html',
            controller: 'updateCtrl',
            controllerAs: 'vm'
        })
        .when('/delete/:id', {
            templateUrl: 'views/delete.html',
            controller: 'deleteCtrl',
            controllerAs: 'vm'
        })
        .when('/signup', {
            templateUrl: 'views/signup.html',
            controller: 'signupCtrl',
            controllerAs: 'vm'
        })
        .when('/logout', {
            templateUrl: 'views/logout.html',
            controller: 'logoutCtrl',
            controllerAs: 'vm'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginCtrl',
            controllerAs: 'vm'
        })
        .otherwise({redirectTo: '/'});
}

angular
    .module('myApp', ['ngRoute'])
    .controller('listCtrl', listCtrl)
    .controller('listPacksCtrl', listPacksCtrl)
    .controller('createCtrl', createCtrl)
    .controller('createPacksCtrl', createPacksCtrl)
    .controller('updateCtrl', updateCtrl)
    .controller('deleteCtrl', deleteCtrl)
    .controller('signupCtrl', signupCtrl)
    .controller('loginCtrl', loginCtrl)
    .controller('logoutCtrl', logoutCtrl)
    .config(['$routeProvider', config])
    ;