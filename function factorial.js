 function factorial(n){

 if(n === 0){
     return 1;
 } else{
    return  n * factorial ( n - 1 );
 }
 }
 var r= factorial(8);
 console.log("the firts function",r);




function factorial2(s){
let factorial =  1 ;
for(let i=1 ;i <= s; i++){
    factorial *= i



}
return factorial

}
var a= factorial2(5)
console.log("second function",a);


