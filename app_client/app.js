function config($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'views/list.html',
            controller: 'listCtrl',
            controllerAs: 'vm'
        })
        .when('/list-packs', {
            templateUrl: 'views/list-packs.html',
            controller: 'listPacksCtrl',
            controllerAs: 'vm'
        })
        .when('/list-students', {
            templateUrl: 'views/list-students.html',
            controller: 'listStudentsCtrl',
            controllerAs: 'vm'
        })
        .when('/create', {
            templateUrl: 'views/create.html',
            controller: 'createCtrl',
            controllerAs: 'vm'
        })
        .when('/create-packs', {
            templateUrl: 'views/create-packs.html',
            controller: 'createPacksCtrl',
            controllerAs: 'vm'
        })
        .when('/update/:id', {
            templateUrl: 'views/update.html',
            controller: 'updateCtrl',
            controllerAs: 'vm'
        })
        .when('/update-packs/:id', {
            templateUrl: 'views/update-packs.html',
            controller: 'updatePacksCtrl',
            controllerAs: 'vm'
        })
        .when('/delete/:id', {
            templateUrl: 'views/delete.html',
            controller: 'deleteCtrl',
            controllerAs: 'vm'
        })
        .when('/delete-packs/:id', {
            templateUrl: 'views/delete-packs.html',
            controller: 'deletePacksCtrl',
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
    .controller('listStudentsCtrl', listStudentsCtrl)
    .controller('createCtrl', createCtrl)
    .controller('createPacksCtrl', createPacksCtrl)
    .controller('updateCtrl', updateCtrl)
    .controller('updatePacksCtrl', updatePacksCtrl)
    .controller('deleteCtrl', deleteCtrl)
    .controller('deletePacksCtrl', deletePacksCtrl)
    .controller('signupCtrl', signupCtrl)
    .controller('loginCtrl', loginCtrl)
    .controller('logoutCtrl', logoutCtrl)
    .config(['$routeProvider', config])
    ;