var content_picture=
   [ { fieldname: 'content_picture',
       originalname: '1',
       name: '9770ef523eca4ed5efb34b6181f6d4d0',
       encoding: '7bit',
       mimetype: 'image/jpeg',
       path: 'uploadImg/9770ef523eca4ed5efb34b6181f6d4d0',
       extension: '',
       size: 178711,
       truncated: false,
       buffer: null },
     { fieldname: 'content_picture',
       originalname: '2',
       name: 'db9ee2dc8c5d87721cdcca4990e9688b',
       encoding: '7bit',
       mimetype: 'image/jpeg',
       path: 'uploadImg/db9ee2dc8c5d87721cdcca4990e9688b',
       extension: '',
       size: 167356,
       truncated: false,
       buffer: null } ];

console.log(content_picture.length)
var content_index = new Array(content_picture.length);;


  var tmp={};
  content_picture.forEach(function(v, i, o){
      tmp = {};
 //      console.log('v', v);
      console.log('i', i);
//       console.log('o', o);
      tmp.index = Number(v.originalname); // number 타입으로 명시적 형변환
			tmp.name = v.name;
			console.log('tmp', tmp);
			content_index[i] = tmp;

  })


	console.log('content_index', content_index);
