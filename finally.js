const promisiObj = new Promise((resolve,reject)=>{
    let condition = false;
    if(condition == true){
        resolve("request succesful");
    }else{
        reject("request failed");
    }
});
promisiObj.then(
    (result)=>{console.log(result);
    }).catch((error)=>{console.log(error)}).finally(()=>{console.log("chalega hi chalega")});
