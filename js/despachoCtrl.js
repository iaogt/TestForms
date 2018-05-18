var app = angular.module("myApp", ['ui.bootstrap']);

app.controller("despachoCtrl", function($scope, $uibModal, $document) {
    var $ctrl = this;

    // Listado de Despachos
    $scope.records = [
       {
            "fecha" : "12-05-18",
            "descripcion" : "1 litro",
            "eliminar" : "@modo",
        },{
            "fecha" : "23-05-18",
            "descripcion" : "4 litros",
            "eliminar" : "@fat",
        },{
            "fecha" : "15-05-18",
            "descripcion" : "2 litros",
            "eliminar" : "@twitter",
        },{
            "fecha" : "10-05-18",
            "descripcion" : "2.5 litros",
            "eliminar" : "@kev",
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

// app.config(function($routeProvider) {
//   $routeProvider
//
//             // route for the home page
//             .when('/interna-despachos', {
//                 templateUrl : 'pages/interna-despachos.html',
//                 controller  : 'internadespachoCtrl'
//             })
//
//             // route for the about page
//             .when('/about', {
//                 templateUrl : 'pages/about.html',
//                 controller  : 'aboutCtrl'
//             })
//
//             // route for the contact page
//             .when('/contact', {
//                 templateUrl : 'pages/contact.html',
//                 controller  : 'contactCtrl'
//             });
//     });


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
