function updateAbsenteeismsCtrl($http, $location, $routeParams) {
    let vm = this;
    vm.error = '';
    vm.title = "Изменение";
    const id = $routeParams.id;

    vm.formWasValidated = false;

    vm.formModel = {
        pack: {
            valid: true,
            infoText: '',
            value: ''
        },
        fio: {
            valid: true,
            infoText: '',
            value: ''
        },
        skipTime: {
            valid: true,
            infoText: '',
            value: ''
        }
    };

    vm.validate = function () {

        vm.formWasValidated = true;
        const onlyLettersAndDigits = /^([-\.a-zа-яё \d]+)$/i;

        for (let field in vm.formModel) {
                vm.formModel[field].valid = onlyLettersAndDigits.test(vm.formModel[field].value);
                vm.formModel[field].infoText = (vm.formModel[field].valid) ? 'Введено верно' : 'Допускаются только буквы и цифры';
                vm.formWasValidated = vm.formWasValidated && vm.formModel[field].valid;
        }
    };

    vm.sendForm = function () {

        vm.error = '';
        console.log('waiting...');
        let p1 = $http.put('/api/absenteeisms/' + id, {
            pack: vm.formModel.pack.value,
            fio: vm.formModel.fio.value,
            skipTime: vm.formModel.skipTime.value
        }, {
            headers: {
                token: localStorage.getItem('token')
            }
        });

        p1.then(res => {
            console.log('success!');
            $location.path('/');
        }, err => {
            vm.error = 'Ошибка: ' + JSON.stringify(err);
            //console.log('error add practic: ', err);
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
            //console.log('success!');
            const oneRow = res.data;
            vm.formModel.pack.value = oneRow.pack;
            vm.formModel.fio.value = oneRow.fio;
            vm.formModel.skipTime.value = oneRow.skipTime;
            vm.validate();
        }, err => {
            vm.error = 'Ошибка: ' + JSON.stringify(err);
            //console.log('error add practic: ', err);
        });
    }
    init();
}