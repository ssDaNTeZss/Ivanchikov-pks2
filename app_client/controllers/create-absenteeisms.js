function createAbsenteeismsCtrl($http, $location) {
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
        packSelected: null,
        dateSkip: {
            valid: true,
            infoText: '',
            value: new Date(Date.now())
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

    let p2 = $http.get('/api/packs', {
        headers: {
            token: localStorage.getItem('token')
        }
    });

    p2.then(res => {
            vm.formModel.pack = res.data;
        },
        err => {
            $location.path('/');
        }
    );

    let p1 = $http.get('/api/students', {
        headers: {
            token: localStorage.getItem('token')
        }
    });

    addButton.onclick = function () {
        p1.then(res => {
                //console.log(vm.formModel.packSelected);
                //vm.list_st = res.data;
                let val = res.data,
                    mas = [];
                for (let i = 0; i < val.length; i++) {
                    if (val[i].pack === vm.formModel.packSelected.name) {
                        //console.log(val[i]);
                        mas.push(val[i]);
                    }
                }
                vm.list_students = mas;
               // console.log(vm.formModel.dateSkip.value);
                //console.log(mas);
            },
            err => {
                $location.path('/');
            }
        );
    }
    vm.test = localStorage.getItem('test');

    vm.sendForm = function () {
        vm.error = '';
        console.log('waiting...');
        let arr = vm.list_students,
        arrId = [];
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            arrId.push(arr[i]._id);
        console.log(arrId[i]);
        console.log(arr[i].fio);
        console.log(arr[i].pack);
        console.log(vm.formModel.dateSkip.value);
        console.log(arr[i]._id.value)
        }

        // let p3 = $http.post('/api/absenteeisms', {
        //     pack: vm.formModel.packSelected.name,
        //     ruk: vm.formModel.ruk.value,
        //     student: vm.formModel.student.value,
        //     group: vm.formModel.group.value,
        //     spec: vm.formModel.spec.value,
        //     dateStart: vm.formModel.dateStart.value,
        //     dateFinish: vm.formModel.dateFinish.value,
        //     mark: 0
        // }, {
        //     headers: {
        //         token: localStorage.getItem('token')
        //     }
        // });
        //
        // p3.then(res => {
        //     console.log('success!');
        //     $location.path('/');
        // }, err => {
        //     vm.error = 'Ошибка: ' + JSON.stringify(err);
        //     //console.log('error add practic: ', err);
        // });
    }


}