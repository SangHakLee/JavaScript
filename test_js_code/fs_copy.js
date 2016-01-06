var fs = require('fs.extra');

fs.copy('foo.txt', 'bar.txt', {replace:true}, function(err){
  if(err){
     console.log("err", err);
     throw err;
  }

  console.log("copied 'foo.txt' to 'bar.txt");
});
