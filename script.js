//1
function counter(){
    var counter=0;

  function  IncreaseCounter(){
         return counter+=1;
  };  
  return IncreaseCounter;
}
var counter=counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

//2
let count=0;
(function(){
    if(count ===0){
     let count=1;
      console.log(count);
}
console.log(count);

})();

//3
for(var i=0;i<3;i++)
{
    setTimeout(function log(){
    console.log(i)
    },1000);
}
//6
var a=12;
(function(){
    alert(a);
})();
//area
function calculateRectangleArea(length) {
    function innerFunction(breadth) {
      return length * breadth;
    }
  
    return innerFunction;
  }
  
  // output// 
  const rectangleArea = calculateRectangleArea(9); // Outer function is called with the length parameter
  const area = rectangleArea(15); // Inner function is called with the breadth parameter
  console.log(area);
//7
var a=10;
var x=(function(){
    var a=12;
    return function(){
        alert(a);
    };
})();
x();
//8
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);
//5
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(`Count is now ${count}`);
  }

  return inner;
}


const incrementCount = outer();


incrementCount(); // Count is now 1
incrementCount(); // Count is now 2
incrementCount(); 