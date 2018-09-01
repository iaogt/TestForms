oeccApp.controller('lubricantesCtrl', ['$scope','firebase','$firebaseObject','$firebaseArray','$routeParams',function ($scope,firebase,$firebaseObject,$firebaseArray,$routeParams) {
    // Referencia a Equipos
    var objDefault = {
        placa:"",
        lubricante:"",
        kilometros:0,
        cantidad:0,
        fecha:null
    };
      $scope.fechaDespacho = undefined;
    $scope.registro=objDefault;
      $scope.objetoRegistro = null;
    $scope.dataref = firebase.database().ref().child('lubricantes');
    $scope.lubricantes=[];
    $scope.dataref.on('value', snap => {
      var data = snap.val();
      for(var key in data){
        $scope.lubricantes.push(data[key].nombre);
      }
    });

    var ref = firebase.database().ref('/formularioLubricantes');

    $scope.collDespachos = $firebaseArray(ref);

    var despacho = $routeParams.id;

    if(despacho!=null){
      console.log("si viene");
      var ref2 = firebase.database().ref('formularioLubricantes/'+despacho);
      $scope.registro = $firebaseObject(ref2);
      $scope.registro.$loaded().then(function(){
        $scope.fechaDespacho = new Date($scope.registro.fecha);
      });
      
    }

    // Referencia a Equipos
    $scope.dataref = firebase.database().ref().child('equipos');
    $scope.dataref.on('value', snap => {
      $scope.equipos = snap.val();
      $scope.placas=[];
      angular.forEach($scope.equipos, function(value, key) {
        this.push($scope.equipos[key]['Vehicle Documents License Plate']);
      }, $scope.placas);

  
    });

    $scope.crearLubricante = function(){
        $scope.registro.fecha = $scope.fechaDespacho.getFullYear() + "-" + ($scope.fechaDespacho.getMonth() + 1) + "-" + $scope.fechaDespacho.getDate();
        if($scope.registro==null){
          var ref = firebase.database().ref('formularioLubricantes').push();
          ref.set($scope.registro).then(function(ref){
            $scope.objetoRegistro =ref;
            alert('Información guardada');
            $scope.registro = objDefault;
          }).catch(function(){
            alert('Error al guardar');
          });
        }else{
          $scope.registro.$save();
        }
    }

    $scope.eliminarDespacho = function(llave){
        $scope.collDespachos.$remove(llave);
    }

}]);