var names = ["a","a","c","d","e","f","g"];

var uniq = names.reduce(function(a,b){
    console.log("a=", a);
    console.log("b=", b);
    
	if (a.indexOf(b) < 0 ){
        console.log(a.indexOf(b))
        console.log("뭔가걸림")
        a.push(b);    
    } 
	return a;
  },[]);

console.log(uniq) // [ 'Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Carl' ]