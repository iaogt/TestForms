var app = angular.module("myApp", ['ui.bootstrap','firebase']);
app.controller("internadespachoCtrl", function($scope, $uibModal, $document, $firebaseObject) {
    var $ctrl = this;
    $scope.mostrarTanques = false;
    $scope.mostrarBombas = false;
    $scope.fechaDespacho = undefined;

    $scope.nuevoFormularioDespacho = {
      fecha: "",
      tanqueInicio5K: 0,
      galonesInicio5K: 0,
      tanqueFinal5K: 0,
      galonesFinal5K: 0,
      tanqueInicio10K: 0,
      galonesInicio10K: 0,
      tanqueFinal10K: 0,
      galonesFinal10K: 0,
      contadorInicialB1: 0,
      contadorFinalB1: 0,
      TotalDespachadoB1: 0,
      contadorInicialB2: 0,
      contadorFinalB2: 0,
      TotalDespachadoB2: 0,
      contadorInicialB3: 0,
      contadorFinalB3: 0,
      TotalDespachadoB3: 0
    };

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

    $scope.guardarInfo = function(){
      $scope.nuevoFormularioDespacho.fecha = $scope.fechaDespacho.getFullYear() + "-" + ($scope.fechaDespacho.getMonth() + 1) + "-" + $scope.fechaDespacho.getDate();
      console.log($scope.nuevoFormularioDespacho);
    }

    // Firebase Code
    // $scope.holamundo = document.getElementById('holamundo');
    // $scope.dataref = firebase.database().ref().child('equipos');
    // $scope.dataref.on('value', snap => {
    //   $scope.equipos = snap.val();
    //   $scope.placas=[];
    //   angular.forEach($scope.equipos, function(value, key) {
    //     console.log($scope.equipos[key]['Vehicle Documents License Plate']);
    //     this.push($scope.equipos[key]['Vehicle Documents License Plate']);
    //   }, $scope.placas);
    //
    //   console.log($scope.placas);
    // });


});


// Segundo controller
app.controller('modalDespachosCtrl', function ($scope, $uibModalInstance, $firebaseObject) {
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
    $scope.submitForm = function(isValid) {

    // check to make sure the form is completely valid
    if (isValid) {
      alert('our form is amazing');
      console.log($scope.nuevoDespacho);
    }

  };
  $scope.dataref2 = firebase.database().ref("/formulariosDespachos").child('2018-05-21').child('despachos').child('P-001AAB');
  // const itemData = $scope.dataref2.child('2018-05-21').child('despachos');
  // const itemData2 = itemData.child('despachos');
  $scope.dataref2.on('value', snap => {
    $scope.DataForm = snap.val();
    console.log($scope.DataForm);
  });

  $scope.dataref2.set($scope.nuevoDespacho);
  console.log($scope.nuevoDespacho);

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


// //Controlador de firebase
// app.controller("internadespachoCtrl", function($scope, $firebaseObject) {
//   // firebase.initializeApp(config);
//
// });
