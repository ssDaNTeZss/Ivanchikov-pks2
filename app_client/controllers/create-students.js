function createStudentsCtrl($http, $location) {
    let vm = this;
    vm.error = '';

    vm.formWasValidated = false;

    vm.formModel = {
        pack: null,
        fio: {
            valid: true,
            infoText: '',
            value: ''
        },
        packSelected: null
    };

    let p1 = $http.get('/api/packs', {
        headers: {
            token: localStorage.getItem('token')
        }
    });

    p1.then(res => {
            vm.formModel.pack = res.data;
        },
        err => {
            $location.path('/');
        }
    );


    vm.validate = function () {
        vm.formWasValidated = true;
        const onlyLettersAndDigits = /^([-\.a-zа-яё \d]+)$/i;
        console.log(vm.formModel);
        for (let field in vm.formModel) {
            vm.formModel.name.valid = onlyLettersAndDigits.test(vm.formModel.name.value);
            vm.formModel.name.infoText = (vm.formModel.name.valid) ? 'Введено верно' : 'Допускаются только буквы и цифры';
            vm.formWasValidated = vm.formWasValidated && vm.formModel.name.valid;
        }
    };

    vm.sendForm = function () {

        vm.error = '';

        console.log('waiting...');
        let val = vm.formModel.fio.value,
            arr = val.split(', ');
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            let p1 = $http.post('/api/students', {
                pack: vm.formModel.packSelected.name,
                fio: arr[i]
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
        }
    }
}
