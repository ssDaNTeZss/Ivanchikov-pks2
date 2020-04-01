function deleteStudentsCtrl($http, $location, $routeParams) {
    let vm = this;
    vm.error = '';
    const id = $routeParams.id;

    vm.formModel = {
        fio: {}
    };

    vm.sendForm = function () {
        vm.error = '';
        console.log('waiting...');
        let p1 = $http.delete('/api/students/' + id, {
            headers: {
                token: localStorage.getItem('token')
            }
        });

        p1.then(res => {
            console.log('success!');
            $location.path('/list-students');
        }, err => {
            vm.error = 'Ошибка: ' + JSON.stringify(err);
            //console.log('error : ', err);
        });
    };

    function init() {
        vm.error = '';
        console.log('waiting...');

        let p1 = $http.get('/api/students/' + id, {
            headers: {
                token: localStorage.getItem('token')
            }
        });

        p1.then(res => {
            const oneRow = res.data;
            vm.formModel.fio.value = oneRow.fio;
        }, err => {
            vm.error = 'Ошибка: ' + JSON.stringify(err);
            //console.log('error: ', err);
        });
    }

    init();


}