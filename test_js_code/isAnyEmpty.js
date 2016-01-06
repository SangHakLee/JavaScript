var err = ['aa', 'bb', 'null']

var a = 'a'
var b = 'b'
var c = null

var isAnyEmpty = function(values){
	for(i in values){
		if( isEmpty(values[i]) ){
			return true;
		};
	}
	return false;
};

// console.log(isAnyEmpty([a, b, c]));


var isEmpty = exports.isEmpty = function(value){
  if( value == undefined || value == null || value == "" || ( value != null && typeof value == "object" && !Object.keys(value).length ) ){
    return true
  }else{
    return false
  }
};

// console.log( [] == undefined );
// console.log( [] == null );
// console.log( [] ==  "" );

// console.log( typeof null );

var a = [];
// console.log( typeof a);
// console.log(a);
// console.log( Object.keys(null).length );
// console.log(" 결과", isEmpty( a ));

var result = {TB_PRODUCT:1}

// console.log( !result.TB_PRODUCT.dataValues.product_name );
console.log( isAnyEmpty(result.TB_PRODUCT.dataValues.product_name) );


