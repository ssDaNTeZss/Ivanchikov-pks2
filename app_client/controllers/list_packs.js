function listPacksCtrl($http, $location, $rootScope) {


    let vm = this;
    vm.title = "Список практик";

    //console.log('waiting...');
    let p1 = $http.get('/api/packs', {
        headers : {
            token: localStorage.getItem('token')
        }
    });

    //

    p1.then(res=>{
        vm.list = res.data;
    },
    err=>{
        $location.path('/');
        // vm.list = [];
        // console.log('error!', err);
    }
    );

    console.log('hello!');

  //  localStorage.setItem('test', 'ok');

    vm.test = localStorage.getItem('test');

}