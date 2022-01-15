function getName(name,callback){
    console.log("start!!!!!!!!!!");
    setTimeout(() => {
        callback(name);
    }, 300);
}
let nm = getName("sonam",(nm)=>{
    console.log(nm)

});
console.log("end!!!!!!!!!!!")
