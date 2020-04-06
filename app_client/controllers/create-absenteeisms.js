function createAbsenteeismsCtrl($http, $location) {
    let vm = this;
    vm.error = '';

    vm.formWasValidated = false;

    vm.formModel = {
        pack: null,
        fio: null,
        packSelected: null,
        fioSelected: null,
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
        const onlyLettersAndDigits = /^[2-8]+$/i;
        console.log(vm.formModel);
        vm.formModel.skipTime.valid = onlyLettersAndDigits.test(vm.formModel.skipTime.value);
        vm.formModel.skipTime.infoText = (vm.formModel.skipTime.valid) ? 'Введено верно' : 'Допускаются только цифры от 2 до 8';
        vm.formWasValidated = vm.formWasValidated && vm.formModel.skipTime.valid;
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

    let p3 = $http.get('/api/students', {
        headers: {
            token: localStorage.getItem('token')
        }
    });

    p3.then(res => {
        vm.list_students = res.data;
    }, err => {
        $location.path('/login');
    });

    addButton.onclick = function () {
        p3.then(res => {
                let val = res.data,
                    mas = [];
                console.log(val);
                for (let i = 0; i < val.length; i++) {
                    if (val[i].pack === vm.formModel.packSelected.name) {
                        mas.push(val[i]);
                    }
                }
                vm.formModel.fio = mas;
                console.log(vm.formModel.fio);
            },
            err => {
                $location.path('/');
            }
        );
    }

    vm.sendForm = function () {

        vm.error = '';

        console.log('waiting...');
        let p4 = $http.post('/api/absenteeisms', {
            pack: vm.formModel.packSelected.name,
            dateSkip: vm.formModel.dateSkip.value,
            fio: vm.formModel.fioSelected.fio,
            skipTime: vm.formModel.skipTime.value
        }, {
            headers: {
                token: localStorage.getItem('token')
            }
        });

        p4.then(res => {
            console.log('success!');
            $location.path('/');
        }, err => {
            vm.error = 'Ошибка: ' + JSON.stringify(err);
        });
    }
}