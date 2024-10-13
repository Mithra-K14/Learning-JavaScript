function str_js()
{
let s1="Hi Hello....";
let s2="Everyone ";
console.log("Length:",s1.length);
console.log("Joining Strings: ",s1+s2);
console.log("Uppercase: ",s1.toUpperCase());
console.log("Lowercase: ",s1.toLowerCase());
console.log("Does s1 includes the given word in it: ",s1.includes('Every'));
console.log("Finding the index value of the given letter: ",s1.indexOf('i'));
console.log("Use of Substring Function: ",s1.substring(0,10));
console.log("Use of Replace Function: ",s1.replace("Hello","hii"));
}
function main()
{
    str_js();
}
main();
