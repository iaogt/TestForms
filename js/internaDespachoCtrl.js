var app = angular.module("myApp", ['ui.bootstrap']);
app.controller("internadespachoCtrl", function($scope, $uibModal, $document) {
    var $ctrl = this;

    // Listado de Despachos
    $scope.records = [
       {
            "No" : "1",
            "First" : "Mark",
            "Last" : "Otto",
            "Handle" : "@modo",
        },{
            "No" : "2",
            "First" : "Jacob",
            "Last" : "Thornton",
            "Handle" : "@fat",
        },{
            "No" : "3",
            "First" : "Larry",
            "Last" : "The Bird",
            "Handle" : "@twitter",
        },{
            "No" : "4",
            "First" : "Kevin",
            "Last" : "Herrera",
            "Handle" : "@kev",
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
