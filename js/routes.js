// Configuración de las rutas
oeccApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'pages/home.html',
    })
		.when('/reportes', {
			templateUrl: 'pages/reportes.html',
    })
		.when('/abc', {
			templateUrl: 'pages/abc.html',
    })
    .when('/despachos', {
      template: '<despacho></despacho>',
		}).
		when('/despacho/:id',{
			template: '<internadespacho></internadespacho>'
		})
		.when('/interna', {
			template: '<internadespacho></internadespacho>'
		})
		.when('/reportecombustible', {
			templateUrl: 'reportes/combustible.html',
			controller: 'combustibleCtrl'
		}).when('/lubricantes',{
			templateUrl: 'pages/hlubricantes.html',
			controller: 'lubricantesCtrl'
		}).when('/ilubricantes',{
			templateUrl: 'pages/lubricantes.html',
			controller: 'lubricantesCtrl'
		}).when('/ilubricantes/:id',{
			templateUrl: 'pages/lubricantes.html',
			controller: 'lubricantesCtrl'
		}).when('/rlubricante',{
			templateUrl: 'pages/reportelubricantes.html',
			controller: 'rlubricantesCtrl'
		}).when('/equiposCrud',{
			templateUrl: 'pages/abc/equipos.html',
			controller: 'equiposCrudCtrl'
		})

	}]);