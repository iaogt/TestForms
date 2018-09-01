 
  /*
  templateUrl	: '',
              controller 	: 'mainController'
  
              templateUrl : 'pages/internaDespachos.html',
              controller 	: 'aboutController'
              */
  
  // Segundo controller
  oeccApp.controller('modalDespachosCtrl', function ($scope, $uibModalInstance, $firebaseObject) {
    var $ctrl = this;
  
    // Modelo Nuevo Despacho
    $scope.nuevoDespacho = {
      kilometraje: undefined,
      placa: "",
      departamento:"",
      galones: undefined,
      piloto: "",
      firma: "",
    };
  
    $ctrl.ok = function () {
      $uibModalInstance.close($scope.nuevoDespacho);
  
    };
  
    $ctrl.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  
    // Referencia a Equipos
    $scope.dataref = firebase.database().ref().child('equipos');
    $scope.dataref.on('value', snap => {
      $scope.equipos = snap.val();
      $scope.placas=[];
      angular.forEach($scope.equipos, function(value, key) {
        console.log($scope.equipos[key]['Vehicle Documents License Plate']);
        this.push($scope.equipos[key]['Vehicle Documents License Plate']);
      }, $scope.placas);
  
      console.log($scope.placas);
  
    });
  
    // $scope.dataref2 = firebase.database().ref("/formulariosDespachos");
    // $scope.dataref2.on('value', snap => {
    //   $scope.DataForm = snap.val();
    //   console.log($scope.DataForm);
    // });
  
    $scope.ngModelOptionsSelected = function(value) {
       if (arguments.length) {
         _selected = value;
       } else {
         return _selected;
       }
     };
  
     $scope.modelOptions = {
      debounce: {
        default: 500,
        blur: 250
      },
      getterSetter: true
    };
  
  
  });