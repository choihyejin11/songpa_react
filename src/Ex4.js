//react lib 모두 쓰겠다 
import React from 'react';

const Map1 = () => {
// var array = [1,2,3,4,5];
var array = ['kim','dong','joo'];

//jsx (javascript extend): 자바스크립트 + html tab 혼합
// 자바스크립트 {} + html <div></div>
var result = array.map(element=><li>{element}</li>);
return ( 
  <div>
    <ul>
       {result}


    </ul>



  </div>
 );
}
 
export default Map1;