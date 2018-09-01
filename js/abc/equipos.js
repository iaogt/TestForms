oeccApp.controller('equiposCrudCtrl', ['$scope','firebase','$firebaseObject','$firebaseArray',function ($scope,firebase,$firebaseObject,$firebaseArray) {
    $scope.dataref = firebase.database().ref().child('equipos');

    $scope.arrData = $firebaseArray($scope.dataref);

    $scope.arrData.$loaded().then(function(x){
        console.log($scope.arrData);
        $scope.opciones.data = $scope.arrData;
    });

    $scope.opciones = {
        enableGridMenu: true,
        enableSelectAll: true,
        exporterExcelFilename: 'myFile.xlsx',
        exporterExcelSheetName: 'Sheet1',
        enableFiltering: true,
        columnDefs:[
            {name:"Código",field:"$id"},
            {name:"Placa",field:"Vehicle Documents License Plate"},
            {name:"Marca",field:"BRAND"},
            {name:"Modelo",field:"MODEL"},
            {name:"Status",field:"STATUS"},
            {name:"Serial",field:"SERIAL NUMBER"}
        ]
    };


}]);