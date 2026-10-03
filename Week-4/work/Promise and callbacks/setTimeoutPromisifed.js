function setTimeoutPromisifed (delay){

    return new Promise(function(resolve,reject){

      setTimeout(function(){

        resolve();
      }), delay
    })

}



setTimeout(() =>{
  console.log("2 second has been passed");
},2000)