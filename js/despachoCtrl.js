angular.module("despacho", ['ui.bootstrap','firebase']).component('despacho',{
    templateUrl: 'pages/despacho.html',
    controller:['$scope','$firebaseArray','$firebaseObject',function despachoController($scope, $firebaseArray,$firebaseObject,$uibModal, $document) {
        var $ctrl = this;

        var ref = firebase.database().ref('/formulariosDespachos');

        $scope.collDespachos = $firebaseArray(ref);

        

        //$scope.dbDespachos.$bindTo($scope,'collDespachos');


        $ctrl.openModal = function () {
        console.log("Abrir Modal");
            var parentElem = angular.element($document[0].querySelector('.container '));
            var modalInstance = $uibModal.open({
            animation: false,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'modalDespachos.html',
            controller: 'modalDespachosCtrl',
            controllerAs: '$ctrl',
            appendTo: parentElem
            });
        }

        $scope.agregarDeposito = function() {
            if ($scope.formDepositos.$valid) {
                console.log("Exito");
            }
        }

        $scope.eliminarDespacho = function(llave){
            $scope.collDespachos.$remove(llave);
        }
    }]
});



