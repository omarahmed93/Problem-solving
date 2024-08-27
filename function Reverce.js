function Reverce(str){
console.log("the orginal word:",str)
let word="";
for(let i=str.length - 1;i>=0;i--){
    word+=str[i];
}
return word

}
var a="omar";
console.log(Reverce(a));
console.log(Reverce("Ahmed"));