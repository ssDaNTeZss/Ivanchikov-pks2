function createStudentsCtrl($http, $location) {
    let vm = this;
    vm.error = '';

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

    // let p1 = $http.get('/api/packs', {
    //     headers : {
    //         token: localStorage.getItem('token')
    //     }
    // });
    //
    // p1.then(res=>{
    //         vm.list_packs = res.data;
    //     },
    //     err=>{
    //         $location.path('/');
    //     }
    // );

    let objSel = document.getElementById("packSelect");

    //console.log(vm.list_packs.name.value);
    //Создаем новый объект Option и заносим его в коллекцию options
    //  objSel.options[2] = new Option(vm.list_packs.name.value, vm.list_packs.name.value);

    vm.validate = function () {
        vm.formWasValidated = true;
        const onlyLettersAndDigits = /^([-\.a-zа-яё \d]+)$/i;
        console.log(vm.formModel);
        for (let field in vm.formModel){
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
        for(let i=0; i < arr.length; i++) {
            let p1 = $http.post('/api/students', {
                pack: vm.formModel.packSelect.value,
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