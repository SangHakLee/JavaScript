var str = 'data({"message":"최근<b>3개월<\/b> 내  <b>3건<\/b> 이상 접수된 민원이  <b>없습니다.<\/b>"})'

// console.log(str.replace(/[data\ ( \ ) ]/gi, "").replace(/<(\/)?([a-zA-Z]*)(\\s[a-zA-Z]*=[^>]*)?(\\s)*(\/)?>/gi, ""));
// console.log(JSON.parse(str));
//
//
//
var getValidJson = function(text){
	console.log(text);
	text = text.replace(/data/gi, "")
	text = text.replace(/[ ( \ ) ]/gi, "")
	return text
}

console.log(getValidJson(str));