// when callback functon is not 
console.log("start");
function getName(name){
    setTimeout(() => {
        console.log("inside setTimeOut function");
        return name;
    }, 3000);
}

const nm = getName("sonam");
console.log(nm);
console.log("end!!!");
