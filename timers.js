function p1(){
    console.log("This is printed after 2 seconds");
    
}
setTimeout(p1,2000);
let num = 0;
function p2(){
    console.log("This is printed after 3 second, num = ",num);
    num++;
    if(num>=3){
        clearInterval(printer);
    }
}
const printer = setInterval(p2,3000);