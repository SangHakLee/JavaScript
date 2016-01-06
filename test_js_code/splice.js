var arr = [ 'kkt_70265821', 'kkt_70145599','kkt_70265822', 'kkt_70145593' ];

var except = [ 'kkt_70265822', 'kkt_70265821' ]


for(i in arr){
  for(j in except){
    if(except[j] == arr[i]){
      arr.splice(i,1);
    }
  }
}
console.log(arr);
//
//


// console.log( users.splice(2,1));
// console.log( users );