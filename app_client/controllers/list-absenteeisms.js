function listAbsenteeismsCtrl($http, $location, $rootScope) {

    let vm = this;

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
            value: new Date()
        },
        skipTime: {
            valid: true,
            infoText: '',
            value: ''
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

    let p1 = $http.get('/api/absenteeisms', {
        headers: {
            token: localStorage.getItem('token')
        }
    });

    p1.then(res => {
        vm.list_students = res.data;
    }, err => {
        $location.path('/login');
    });

    addButton.onclick = function () {
        p1.then(res => {
                let val = res.data,
                    mas = [];
                for (let i = 0; i < val.length; i++) {
                    if (val[i].pack === vm.formModel.packSelected.name) {
                        mas.push(val[i]);
                    }
                }
                vm.list_students = mas;
            },
            err => {
                $location.path('/');
            }
        );
    }
    vm.test = localStorage.getItem('test');
}
