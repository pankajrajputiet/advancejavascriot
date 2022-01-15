async function test(){
    console.log("a")
 await console.log("b");
    console.log("c");
    console.log("d");
}
test().then((result)=>{
console.log(result);
});
console.log("e");
console.log("f");
console.log("g");
