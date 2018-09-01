oeccApp.filter('keylength',function(){
    return function(input){
        if(!angular.isObject(input)){
            throw Error("falta objeto");
        }
        return Object.keys(input).length;
    }
});