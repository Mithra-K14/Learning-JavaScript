function hello(callback){
    console.log("Hello");
    callback();
}
function Goodbye(){
    console.log("bye bye");
}
hello(Goodbye);
