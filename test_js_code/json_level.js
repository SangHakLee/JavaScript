var json = {
  "store_click": 0,
  "TB_STORE": {
    "store_password": "",
    "store_nameaa": "test"
  }
}

// console.log(Object.keys(json));

for( key in json ){
  // console.log(typeof key);
  // console.log("key", key);
  if( typeof json[key] ===  "object" ){
    // console.log("key",key);
    // console.log("typeof", typeof json[key]);
    // console.log(json[key]);
    var del = key
    var inner = json[key]
    for(key in inner){
      // console.log("inner key", key);
      // console.log("inner innerkey", inner[key]);
      json[key] = inner[key]
    }
    delete json[del]

  }
}

var returnSequelizeDataValuesSameLevel = function(json){
  for( key in json ){
    if( typeof json[key] ===  "object" ){
      var del = key,
          inner = json[key];
      for(key in inner){
        json[key] = inner[key]
      }
      delete json[del]
    }
  }
  return json
}

console.log(returnSequelizeDataValuesSameLevel(json));
console.log(json);