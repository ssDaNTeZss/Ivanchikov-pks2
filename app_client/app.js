function config($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'views/list-absenteeisms.html',
            controller: 'listAbsenteeismsCtrl',
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
        .when('/create-absenteeisms', {
            templateUrl: 'views/create-absenteeisms.html',
            controller: 'createAbsenteeismsCtrl',
            controllerAs: 'vm'
        })
        .when('/create-packs', {
            templateUrl: 'views/create-packs.html',
            controller: 'createPacksCtrl',
            controllerAs: 'vm'
        })
        .when('/create-students', {
            templateUrl: 'views/create-students.html',
            controller: 'createStudentsCtrl',
            controllerAs: 'vm'
        })
        .when('/update-packs/:id', {
            templateUrl: 'views/update-packs.html',
            controller: 'updatePacksCtrl',
            controllerAs: 'vm'
        })
        .when('/update-students/:id', {
            templateUrl: 'views/update-students.html',
            controller: 'updateStudentsCtrl',
            controllerAs: 'vm'
        })
        .when('/update-absenteeisms/:id', {
            templateUrl: 'views/update-absenteeisms.html',
            controller: 'updateAbsenteeismsCtrl',
            controllerAs: 'vm'
        })
        .when('/delete-packs/:id', {
            templateUrl: 'views/delete-packs.html',
            controller: 'deletePacksCtrl',
            controllerAs: 'vm'
        })
        .when('/delete-students/:id', {
            templateUrl: 'views/delete-students.html',
            controller: 'deleteStudentsCtrl',
            controllerAs: 'vm'
        })
        .when('/delete-absenteeisms/:id', {
            templateUrl: 'views/delete-absenteeisms.html',
            controller: 'deleteAbsenteeismsCtrl',
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
    .controller('listAbsenteeismsCtrl', listAbsenteeismsCtrl)
    .controller('listPacksCtrl', listPacksCtrl)
    .controller('listStudentsCtrl', listStudentsCtrl)
    .controller('createAbsenteeismsCtrl', createAbsenteeismsCtrl)
    .controller('createPacksCtrl', createPacksCtrl)
    .controller('createStudentsCtrl', createStudentsCtrl)
    .controller('updatePacksCtrl', updatePacksCtrl)
    .controller('updateStudentsCtrl', updateStudentsCtrl)
    .controller('updateAbsenteeismsCtrl', updateAbsenteeismsCtrl)
    .controller('deletePacksCtrl', deletePacksCtrl)
    .controller('deleteStudentsCtrl', deleteStudentsCtrl)
    .controller('deleteAbsenteeismsCtrl', deleteAbsenteeismsCtrl)
    .controller('signupCtrl', signupCtrl)
    .controller('loginCtrl', loginCtrl)
    .controller('logoutCtrl', logoutCtrl)
    .config(['$routeProvider', config])
    ;