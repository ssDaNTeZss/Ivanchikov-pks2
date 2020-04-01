function listStudentsCtrl($http, $location, $rootScope) {

    let vm = this;
    vm.title = "Список практик";

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

        p1.then(res => {
            console.log(vm.formModel.packSelected);
                // let val = res.data,
                // console.log(val);
                vm.list_students = res.data;
                let val = vm.list_students;
                // arr = val.splice(0, 1);
                for (let i = 0; i < val.length; i++) {
                    if (val[i].pack != '4ПКС-16-2') {
                        console.log(val[i]);
                        val.splice(i, 1);
                    }
                }
                // arr = val.delete('pks');
                console.log(val);
                //console.log(arr);
            },
            err => {
                $location.path('/');
            }
        );

        //console.log('hello!');

        //  localStorage.setItem('test', 'ok');

        vm.test = localStorage.getItem('test');

    }
