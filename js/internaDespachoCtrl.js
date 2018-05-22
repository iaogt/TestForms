var app = angular.module("myApp", ['ui.bootstrap']);
app.controller("internadespachoCtrl", function($scope, $uibModal, $document) {
    var $ctrl = this;
    $scope.mostrarTanques = false;
    $scope.mostrarBombas = false;

    // Listado de Despachos
    $scope.records = [
       {
            "No" : "94.56826/36.2589",
            "First" : "Mark",
            "Last" : "Otto",
            "Handle" : "@modo",
            "Handle" : "@modo",
            "Handle" : "@modo",
        },{
            "No" : "94.56826/36.2589",
            "First" : "Jacob",
            "Last" : "Thornton",
            "Handle" : "@fat",
            "Handle" : "@modo",
            "Handle" : "@modo",
        },{
            "No" : "94.56826/36.2589",
            "First" : "Larry",
            "Last" : "The Bird",
            "Handle" : "@twitter",
            "Handle" : "@modo",
            "Handle" : "@modo",
        },{
            "No" : "94.56826/36.2589",
            "First" : "Kevin",
            "Last" : "Herrera",
            "Handle" : "@kev",
            "Handle" : "@modo",
            "Handle" : "@modo",
        }
    ]

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
    //
    // $scope.mostrarCamposTanques = function (){
    //
    //   if ($scope.mostarTanques === true) {
    //
    //   }
    //
    // }


});


// Segundo controller
app.controller('modalDespachosCtrl', function ($uibModalInstance) {
  var $ctrl = this;

  $ctrl.ok = function () {
    $uibModalInstance.close();
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
