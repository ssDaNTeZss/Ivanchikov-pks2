function createStudentsCtrl($http, $location) {
    let vm = this;
    vm.error = '';

    vm.formWasValidated = false;

    vm.formModel = {
        // pack: {
        //     valid: true,
        //     infoText: '',
        //     value: ''
        // },
        fio: {
            valid: true,
            infoText: '',
            value: ''
        }
    };

    vm.validate = function () {
        vm.formWasValidated = true;
        const onlyLettersAndDigits = /^([-\.a-zа-яё \d]+)$/i;
        console.log(vm.formModel);
        for (let field in vm.formModel){
                vm.formModel[field].valid = onlyLettersAndDigits.test(vm.formModel[field].value);
                vm.formModel[field].infoText = (vm.formModel[field].valid) ? 'Введено верно' : 'Допускаются только буквы и цифры';
                vm.formWasValidated = vm.formWasValidated && vm.formModel[field].valid;
        }
    };

    vm.sendForm = function () {

        vm.error = '';

        console.log('waiting...');
        let val = vm.formModel.fio.value,
            arr = val.split(', ');
        console.log(arr);
        for(let i=0; i < arr.length; i++) {
            let p1 = $http.post('/api/students', {
                //fio: vm.formModel.fio.value
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