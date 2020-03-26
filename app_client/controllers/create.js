function createCtrl($http, $location) {
    let vm = this;
    vm.error = '';
    vm.title = "Добавление";


    vm.formWasValidated = false;

    vm.formModel = {
        name: {
            valid: true,
            infoText: '',
            value: ''
        },
        ruk: {
            valid: true,
            infoText: '',
            value: ''
        },
        student: {
            valid: true,
            infoText: '',
            value: ''
        },
        group: {
            valid: true,
            infoText: '',
            value: ''
        },
        spec: {
            valid: true,
            infoText: '',
            value: ''
        },
        dateStart: {
            valid: true,
            infoText: '',
            value: new Date()
        },
        dateFinish: {
            valid: true,
            infoText: '',
            value: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000)
        }
    };

    vm.validate = function () {

        vm.formWasValidated = true;
        const onlyLettersAndDigits = /^([-\.a-zа-яё \d]+)$/i;

        for (let field in vm.formModel){
            if(field!=='dateStart' && field!=='dateFinish'){
                vm.formModel[field].valid = onlyLettersAndDigits.test(vm.formModel[field].value);
                vm.formModel[field].infoText = (vm.formModel[field].valid) ? 'Введено верно' : 'Допускаются только буквы и цифры';
                vm.formWasValidated = vm.formWasValidated && vm.formModel[field].valid;
            }
        }
    };

    vm.sendForm = function () {

        vm.error = '';

        console.log('waiting...');
        let p1 = $http.post('/api/practics', {
            name: vm.formModel.name.value,
            ruk: vm.formModel.ruk.value,
            student: vm.formModel.student.value,
            group: vm.formModel.group.value,
            spec: vm.formModel.spec.value,
            dateStart: vm.formModel.dateStart.value,
            dateFinish: vm.formModel.dateFinish.value,
            mark: 0
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