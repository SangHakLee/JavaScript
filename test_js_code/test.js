console.log('test')
var request = require('request');

function test(){

	// //카페가입
	// var options = {
	// 	"headers": {
	//       "Authorization": "Bearer AAAAOzKgZXX5ZaO2L37thW10aQY1CCkr0BrrJ/PGd8rSqIV388pJsj0DeIbOnK7zrz3iJvIEDeSFy3DlTaSnx4e1jGY="  //access_token을 인증 헤더에 담아야함
	//     },
	//   "url": "https://openapi.naver.com/cafe/cafeApply.json",
	//   "formData" : {
	//   	"clubid" : "28255717",
	//   	"nickname" : "nickname"
	//   }
	// }

	//블로그 조
	var options = {
		"headers": {Authorization:'Bearer AAAAPIsHR5vRcyCuFHit/aw4ge2Y5H+fKi2AeECplEajFHOp599jrlOin6FfJOtccTClo20NPOsRSgVcj1P8MlSDPZ4=' },
  	"url": 'https://openapi.naver.com/blog/writePost.json',
  	"formData":
   	{ "title": '666666',
     "contents": '<p><br><div style=\'max-width:600px !important; height:auto !important;\'> <img src="#0" style=\'max-width:600px !important; height:auto !important;\' /> </div><br><div style=\'max-width:600px !important; height:auto !important;\'> <img src="#1" style=\'max-width:600px !important; height:auto !important;\' /> </div><br><div style=\'max-width:600px !important; height:auto !important;\'> <img src="#2" style=\'max-width:600px !important; height:auto !important;\' /> </div><br><br><span style=\'font-size:11pt; color: rgb(0,0,0)\'>안녕</span><br><br></p><br><br><br><p><b><a href="http://selphone.co.kr/url/app_install_bloglist.html" target="_blank" class="tx-link"><span style="color: rgb(68, 97, 156); font-size: 15pt;">셀폰 앱에 올라온 개인 판매 물품입니다.<br/>셀폰 다운로드 후 연락 가능합니다.<br/>중고폰 판매글 더보기</span></a></b></p><p><br /></p><p><a href="https://goo.gl/gE6323" target="_blank" class="tx-link"><img src="https://s3-ap-northeast-1.amazonaws.com/selphone-storage/naver_upload/naver_upload_3.jpg" class=\'fx\' style="max-width:100%; height:auto;"></a></p><p><br /></p>',
     "categoryNo": 1,
      }
    }
	console.log('options', options);
	request.post(options, function(err, response, body){
		console.log('err', err);
		// console.log('response', response);
		console.log('body', body);
	});
}

test()