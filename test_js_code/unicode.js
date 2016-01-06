// function replaceAll(strTemp, strValue1, strValue2){
//         while(1){
//             if( strTemp.indexOf(strValue1) != -1 )
//                 strTemp = strTemp.replace(strValue1, strValue2);
//             else
//                 break;
//         }
//         return strTemp;
// }
// unescape(replaceAll(str,"\\","%"));
// escape(replaceAll(str,"\\","%"));


function unicodeToChar(text) {
   return text.replace(/\\u[\dABCDEFabcdef][\dABCDEFabcdef][\dABCDEFabcdef][\dABCDEFabcdef]/g,
          function (match) {
               return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
          });
}

console.log( unicodeToChar("\u003c") );


var str = "3개월u003c/bu003e"
var str = "u003c"
// var str = "<"

// console.log( JSON.stringify(str) );

// console.log( String.fromCharCode(parseInt(str,16)) );

// console.log( String.fromCharCode(65) );