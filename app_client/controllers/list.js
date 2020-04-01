function listCtrl($http, $location, $rootScope) {


    let vm = this;
    vm.title = "Список практик";

    //console.log('waiting...');
    let p1 = $http.get('/api/practics', {
        headers: {
            token: localStorage.getItem('token')
        }
    });


    p1.then(res => {
        vm.list = res.data;
        var d = res.data[0].dateStart;
        var curr_date = d.getDate();
        // vm.list.dateStart = curr_date;
        // console.log('hello!');
        console.log(curr_date);
    }, err => {
        $location.path('/login');
        //vm.list = [];
        //console.log('error!', err);
    });


    //  localStorage.setItem('test', 'ok');

    vm.test = localStorage.getItem('test');

}