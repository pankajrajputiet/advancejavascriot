async function test(){
    return "hello";
}
test().then((result)=>{
console.log(result);
}).catch((err)=>{
    console.log(err);
})
