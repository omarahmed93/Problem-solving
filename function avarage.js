function avarage(nums){
    if(typeof nums !=='object'){
        return "enter array pls"

    }
    var sum=0
    for(i=0;i<nums.length;i++){
          sum += nums[i];
        var avarage=sum/nums.length;


    }
return avarage



}
console.log(avarage('omar'));
console.log(avarage([5,6,5,78,9]));