function createPacksCtrl($http, $location) {
    let vm = this;
    vm.error = '';
    // vm.name = "Добавление";


    vm.formWasValidated = false;

    vm.formModel = {
        name: {
            valid: true,
            infoText: '',
            value: ''
        }
    };

    vm.validate = function () {

        vm.formWasValidated = true;
        const onlyLettersAndDigits = /^([-\.a-zа-яё \d]+)$/i;

        for (let field in vm.formModel){
            // if(field!=='dateStart' && field!=='dateFinish'){
                vm.formModel[field].valid = onlyLettersAndDigits.test(vm.formModel[field].value);
                vm.formModel[field].infoText = (vm.formModel[field].valid) ? 'Введено верно' : 'Допускаются только буквы и цифры';
                vm.formWasValidated = vm.formWasValidated && vm.formModel[field].valid;
            // }
        }
    };

    vm.sendForm = function () {

        vm.error = '';

        console.log('waiting...');
        let p1 = $http.post('/api/packs', {
            name: vm.formModel.name.value
        }, {
            headers : {
                token: localStorage.getItem('token')
            }
        });

        p1.then(res=>{
            console.log('success!');
            $location.path('/');
        }, err=>{
            vm.error = 'Ошибка: ' + JSON.stringify(err);
            //console.log('error add practic: ', err);
        });
    }




}