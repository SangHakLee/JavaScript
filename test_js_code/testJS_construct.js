var str = '강남역,잠실역,신논현역';
var val = '남';
console.log("tilt", str.indexOf(val));
console.log("tilt ~", ~str.indexOf(val));
console.log("tilt !", !str.indexOf(val));
if (~str.indexOf(val)) {                // 해당 문자열이 있다면
    console.log(!~ str.indexOf(val)); // 이코드를 실행하라.
} else {
    console.log(222);

}

var num = '2234.5678'
console.log(~num);
console.log(~~num);
