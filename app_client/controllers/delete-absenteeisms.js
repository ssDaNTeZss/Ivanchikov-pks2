function deleteAbsenteeismsCtrl($http, $location, $routeParams) {
    let vm = this;
    vm.error = '';
    const id = $routeParams.id;

    vm.formModel = {
        fio: {},
        pack: {},
        dateSkip: {},
        skipTime: {}
    };

    vm.sendForm = function () {
        vm.error = '';
        console.log('waiting...');
        let p1 = $http.delete('/api/absenteeisms/' + id, {
            headers: {
                token: localStorage.getItem('token')
            }
        });

        p1.then(res => {
            console.log('success!');
            $location.path('/list-absenteeisms');
        }, err => {
            vm.error = 'Ошибка: ' + JSON.stringify(err);
        });
    };

    function init() {
        vm.error = '';
        console.log('waiting...');

        let p1 = $http.get('/api/absenteeisms/' + id, {
            headers: {
                token: localStorage.getItem('token')
            }
        });

        p1.then(res => {
            const oneRow = res.data;
            vm.formModel.fio.value = oneRow.fio;
            vm.formModel.pack.value = oneRow.pack;
            vm.formModel.dateSkip.value = oneRow.dateSkip;
        }, err => {
            vm.error = 'Ошибка: ' + JSON.stringify(err);
        });
    }
    init();
}