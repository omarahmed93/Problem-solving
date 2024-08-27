// you can use it in asynchronous function,where one function has to wait for another function (like waiting for a file to load).
//callback function that is passed arugument to another function and excuted after a certain task  task has been completed or an event has occurred. 

function sayhi(callback){
    console.log('say hi');
    setTimeout(function() {
        console.log("Task completed.");
        
        callback();
      }, 2000); 


}
function callback_function(){
    console.log("done")



}
sayhi(callback_function);