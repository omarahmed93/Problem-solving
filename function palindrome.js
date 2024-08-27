function palindrome(string){
    const len =string.length
    for(i=0;i<len;i++)
    if(string[i]==string[string.length-1-i]){ /// we can make it to campare the last charcter 
        return " it is palindrome"
      


    }
    else{

        return "it is not palindrome"
    }
    

    

    



}
console.log(palindrome("radar"));
console.log(palindrome("kayak"))
console.log(palindrome("rotator"))
console.log(palindrome("wpw"))