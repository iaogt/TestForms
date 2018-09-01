oeccApp.controller('rlubricantesCtrl', ['$scope','firebase','$firebaseObject','$firebaseArray',function ($scope,firebase,$firebaseObject,$firebaseArray) {

    $scope.myData = [];
    $scope.opciones = {
        showGridFooter: true,
        showColumnFooter: true,
        enableFiltering: true,
        enableGridMenu: true,
        enableSelectAll: true,
        exporterExcelFilename: 'myFile.xlsx',
        exporterExcelSheetName: 'Sheet1',
        exporterCsvFilename: 'myFile.csv',
    };


    var ref = firebase.database().ref('/formularioLubricantes').once('value').then(function(snapshot){
        var collFechas = {};
        snapshot.forEach(function(snap){
            var obj = snap.val();
            var objFecha = collFechas[obj.fecha];
            if(objFecha=="undefined" || !objFecha){
                if(obj.fecha!=undefined){
                    var arrFecha = obj.fecha.split("-");
                    objFecha = {"fecha":obj.fecha};//new Date(arrFecha[0],(arrFecha[1]-1),arrFecha[2])};
                }else{
                    obj.fecha = "nodefinido";
                    objFecha= {"fecha":""};
                }
            }
            var cantidad = objFecha[obj.lubricante];
            if(!cantidad){
                cantidad = 0 ;
            }
            cantidad = cantidad + obj.cantidad;
            objFecha[obj.lubricante]=cantidad;
            if(obj.fecha!="nodefinido"){
            collFechas[obj.fecha]=objFecha;
            }
        });
        for(var key in collFechas){
            $scope.myData.push(collFechas[key]);
        }
        $scope.opciones.data = $scope.myData;
        $scope.$apply();
        //console.log($scope.opciones['data']);
    });



}]);