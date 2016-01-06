var queryStringToJSON = function (url) {
  // if (url == undefined || url == null || url == '')
  if(!url)
    return '';
  var pairs = (url).slice(0).split('&');
  var result = {};
  for (var idx in pairs) {
    var pair = pairs[idx].split('=');
    // pair[1] = pair[1].replace(/(\s*)/g, "");
    result[pair[0]]='';
    if (pair.length >= 2){
      for(i=1; i<pair.length; i++){
         result[pair[0]] += decodeURIComponent(pair[i]);
      }
    }
  }
  return result;
}

var text = "post_id:101,user_id:gg_109460865948634979877"

console.log("aa", queryStringToJSON(text) );
console.log("bb", JSON.parse(text) ) ;
