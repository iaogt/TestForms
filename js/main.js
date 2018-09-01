  var config = {
    apiKey: "AIzaSyBXh5rzrlo_fc2rpTTm8KS7zBY7tF8-qFY",
    authDomain: "oeccforms.firebaseapp.com",
    databaseURL: "https://oeccforms.firebaseio.com"
  };
  firebase.initializeApp(config);


// Creación del módulo
var oeccApp = angular.module('oeccApp', ['ngRoute','despacho','internadespacho','firebase','ui.grid']);





// //Controlador de firebase
// app.controller("internadespachoCtrl", function($scope, $firebaseObject) {
//   // firebase.initializeApp(config);
//
// });