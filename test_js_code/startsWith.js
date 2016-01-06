String.prototype.startsWith = function (str){
  console.log("this", this);
  console.log("this.indexOf", this.indexOf(str) );
  return this.indexOf(str) == 0;
}


var str = "store_web";

console.log(str.startsWith("store"));

