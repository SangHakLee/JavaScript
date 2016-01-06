

var switch1 = function(val){
  switch(val){
    case 1 :
      return "1";

    case 2 :
      console.log("2");

    case 3 :
      return "3";

    case 4 :
      console.log("4");


    default :
      console.log("de");
  }
}

function mySwitch(condition) {
   return {
    1: 'one',
    2: 'two',
    3: 'three'
   }[condition] || "default";
}





var getOrderStatus = function(status_code){
  // console.log('status aaaaaaa ', status_code);
  var status_char='';
  switch(status_code){
    case 0 :
    case 000 : status_char = '최초주문';    break;
    case 100 : status_char = '입금대기';    break;
    case 200 : status_char = '결제완료';    break;
    case 300 : status_char = '배송준비중';   break;
    case 400 : status_char = '배송중';   break;
    case 500 : status_char = '배송완료';    break;
  }
  return status_char;
}

function getOrderStatus2(status_code) {
   return {
    000: '최초주문',
    100: '입금대기',
    200: '결제완료',
    300: '배송준비중',
    400: '배송중',
    500: '배송완료'
   }[status_code] || "유효하지 않은 배송상태 "+status_code;
}


console.log(getOrderStatus2(2));
