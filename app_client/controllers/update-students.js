function updateStudentsCtrl($http, $location, $routeParams) {
    let vm = this;
    vm.error = '';
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
        let p1 = $http.put('/api/students/' + id, {
            pack: vm.formModel.pack.value,
            fio: vm.formModel.fio.value
        }, {
            headers: {
                token: localStorage.getItem('token')
            }
        });

        p1.then(res => {
            console.log('success!');
            $location.path('/list-students');
        }, err => {
            vm.error = 'Ошибка: ' + JSON.stringify(err);
            //console.log('error add practic: ', err);
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
            //console.log('success!123');
            const oneRow = res.data;
            vm.formModel.pack.value = oneRow.pack;
            vm.formModel.fio.value = oneRow.fio;
            vm.validate();
        }, err => {
            vm.error = 'Ошибка: ' + JSON.stringify(err);
            //console.log('error add practic: ', err);
        });
    }

    init();
}