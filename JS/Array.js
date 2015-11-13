

var removeDuplicate = function(arr){
    return names.reduce(function(a,b){
	   if (a.indexOf(b) < 0 ) a.push(b);
	   return a;
    },[]);
}

var test = function(){
    return "a"
}

exports.removeDuplicate = removeDuplicate;
exports.test = test;