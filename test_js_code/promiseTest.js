var Promise = require('promise');


var promise1 = function(){
	console.log("start promise1");
	return new Promise(function(resolve, reject){
	  setTimeout(function(){
	  	if(true)
	      resolve('promise1'); //1초 후 성공을 알립니다.
	    else
	    	reject(Error("실패!!"));
	  },4000);
		});
}

var promise2 = function(){
	console.log("start promise2");
	return new Promise(function(resolve, reject){
	  setTimeout(function(){
	  	if(false)
	      resolve('promise2'); //1초 후 성공을 알립니다.
	    else
	    	reject(Error("실패!!"));
	  },2000);
		});
}

var promise3 = function(){
	console.log("start promise3");
	return new Promise(function(resolve, reject){
	  setTimeout(function(){
	  	if(true)
	      resolve('promise3'); //1초 후 성공을 알립니다.
	    else
	    	reject(Error("실패!!"));
	  },3000);
		});
}

promise1()
	.then(function(result){console.log(result); return promise2();})
	.then(function(result){console.log(result); return promise3();})
	.catch(function(err) { console.log("Don't worry about it");})
	.then(function(result){console.log(result); console.log("All done!");});

