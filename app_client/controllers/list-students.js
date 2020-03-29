function listStudentsCtrl($http, $location, $rootScope) {


    let vm = this;
    vm.title = "Список практик";

    //console.log('waiting...');
    let p1 = $http.get('/api/students', {
        headers : {
            token: localStorage.getItem('token')
        }
    });

    //

    p1.then(res=>{
        vm.list_students = res.data;
    },
    err=>{
        $location.path('/');
        // vm.list = [];
        // console.log('error!', err);
    }
    );

    //console.log('hello!');

  //  localStorage.setItem('test', 'ok');

    vm.test = localStorage.getItem('test');

}