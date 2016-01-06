var arr = ["hak", "bin", "yo"]


console.log( arr.indexOf("bin") );
// console.log(arr.splice(0,1));

if(arr.indexOf("bin") > -1){
  console.log("있음");
  // console.log(arr.splice(1,1));
  arr.splice(arr.indexOf("bin"),1)
}else{
  console.log("없는거.");
}

console.log(arr);
