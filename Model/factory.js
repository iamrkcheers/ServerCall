app.factory("serverfactory",function($http){
    var obj={
        show:function(scope){
           $http.get("http://freegeoip.net/json/google.com").success(function(data){scope.result=data;}).error(function(error){scope.result=error});
            //$http.get("http://192.168.0.26:1234/loginjson").success(function(data){scope.result=data;}).error(function(error){scope.result=error});
        }
    };
    return obj;
})