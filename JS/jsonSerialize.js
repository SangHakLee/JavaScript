var data = {user_id: "a", is_delete: false}
// data = JSON.stringify(data);
// data = data.replace(/(\s*)/g,"");
// data = data.substring(1, data.length-1);
// data = data.split(",");
// data = data.map(function(item, index, array){
// 	return array[index] = item.replace(":", "=");
// });
// data = data.join("&")


var jsonSerialize = function(data){
	// data = JSON.stringify(data); // obj->string
	// data = data.replace(/(\s*)/g,""); // 공백제거
	// data = data.slice(1, -1); // 앞뒤 { } 제거
	// data = data.split(","); // , 단위로 노드 나눔
	// data = data.map(function(item, index, array){
	// 	return array[index] = item.replace(":", "=");
	// }); // : -> = 으로 변경한 새로운 배열 생성
	// data = data.join("&") // 각 배열마다 &로 이어줌
	// data = data.replace(/"/g,"") // 나중에 나온 따옴표 제거
	// return data

	return JSON.stringify(data).replace(/(\s*)/g,"").slice(1, -1).split(",").map(function(item, index, array){return array[index] = item.replace(":", "=");}).join("&").replace(/"/g,"")
}

console.log("xxxxx", jsonSerialize(data));


// var testArray = ["aaa", "bbb", "ccc", "ddd"];

// //배열의 모든 요소에 NEW라는 문자열을 더하기
// //메서드 수행 후 리턴값은 새로운 배열
// var newArray = testArray.map(function (item, index, array) {
// 	return array[index] = item + "NEW";
// });

// //메서드 수행 후 원본 배열
// console.log(testArray);

// //메서드 수행 후 생성된 배열
// console.log(newArray);


