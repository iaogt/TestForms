oeccApp.controller('combustibleCtrl', ['$scope','firebase','$firebaseObject',function ($scope,firebase,$firebaseObject) {
    var $ctrl = this;
    var fechaDesde = null;
    var fechaHasta = null;

    $scope.arrData = {};
    $scope.nodata=true;

    $scope.filtrar = function(){
        var resultados = firebase.database().ref('/formulariosDespachos').orderByChild('fecha');
        
        var resultadosAn = $firebaseObject(resultados);
        

        resultadosAn.$loaded().then(function(){
            angular.forEach(resultadosAn,function(value,key){
                var suma = ($scope.arrData[key]) ? $scope.arrData[key] : 0;
                if(value.despachos){
                    for(var desp in value.despachos){
                        var objDespacho = value.despachos[desp];
                        suma += objDespacho.galones;
                    }
                }
                $scope.arrData[value.fecha]=suma;
                $scope.nodata=false;
            });
        });
        

    }

}]);