angular.module("internadespacho", ['ui.bootstrap','firebase']).
component("internadespacho",{
  templateUrl: 'pages/internadespachos.html',
  controller: function internadespachoController($scope, $uibModal, $document, $firebaseObject,$routeParams) {
    var $ctrl = this;
    $scope.mostrarTanques = false;
    $scope.mostrarBombas = false;
    $scope.fechaDespacho = undefined;
    $scope.objetoRegistro = null;

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
      TotalDespachadoB3: 0,
      despachos:{}
    };

    var id = $routeParams.id;

    if(id!=""){
      var obj = firebase.database().ref('formulariosDespachos/'+id);
      $scope.objetoRegistro = $firebaseObject(obj);
      $scope.objetoRegistro.$loaded().then(function(){
        $scope.fechaDespacho = new Date($scope.objetoRegistro.fecha);
      });
      $scope.objetoRegistro.$bindTo($scope,"nuevoFormularioDespacho");
      
    }


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

        modalInstance.result.then(function(data){
          $scope.nuevoFormularioDespacho.despachos[data.placa]=data;
        },function(){
          console.log('dismiss modal');
        });
      }

    $scope.agregarDeposito = function() {
        if ($scope.formDepositos.$valid) {
            console.log("Exito");
        }
    }

    $scope.guardarInfo = function(){
      $scope.nuevoFormularioDespacho.fecha = $scope.fechaDespacho.getFullYear() + "-" + ($scope.fechaDespacho.getMonth() + 1) + "-" + $scope.fechaDespacho.getDate();
      if($scope.objetoRegistro==null){
        var ref = firebase.database().ref('formulariosDespachos').push();
        ref.set($scope.nuevoFormularioDespacho).then(function(ref){
          $scope.objetoRegistro =ref;
          alert('Información guardada');
        }).catch(function(){
          alert('Error al guardar');
        });
      }else{
        $scope.objetoRegistro.$save().then(function(){
          alert('Información guardada');
        }).catch(function(){
          alert('Error al guardar');
        });
      }
      
    }


  }
});


