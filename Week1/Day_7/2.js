function workingwithPromise(){
    return new Promise(resolve,reject)
    .then((resolve)=>{
        setTimeout(resolve,1000);
    }).catch((reject)=>{
        
    })
}