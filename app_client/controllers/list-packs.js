function listPacksCtrl($http, $location, $rootScope) {

    let vm = this;
    vm.title = "Список Групп";

    let p1 = $http.get('/api/packs', {
        headers: {
            token: localStorage.getItem('token')
        }
    });

    p1.then(res => {
            vm.list_packs = res.data;
        },
        err => {
            $location.path('/');
        }
    );

    vm.test = localStorage.getItem('test');
}