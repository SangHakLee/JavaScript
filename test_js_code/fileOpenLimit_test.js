//노드 파일 몇개 열리면 죽는지 테스트
//테스트할 파일 ./fileOpenLimit_test.txt
var fs = require('fs');
var path = './fileOpenLimit_test.txt';

// for ( var i = 0 ; i < 1000 ; i++){
//   fs.open(path, 'w+', function(err, fd){
//     if(err) throw err;
//     console.log(fd)
//   });
// }
//
fs.writeFile(path, 'aa', function(err){
  if(err){
    console.log('err', err);
  }
});


