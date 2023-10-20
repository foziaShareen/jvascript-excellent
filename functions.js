// functions mainly teen kam kartay hein
// koi name de kar bana latein hain jab zaroorat hoti hai bula latein hain
// jab differen data dal na ho
//reuseability
console.log("hello");
// yeh immediately chal jaye ga agar hum is ko bad mein chalana chahtein hey to phir?
function hello(){
    console.log("hello")
}
// kia yeh chalay ga , no 
hello();
// ab chalay ga
function tea(){
    console.log("take water");
    console.log("put on fire");
    console.log("mix patiand milk");
    console.log("tea is ready");
}
tea()
// next day you need tea
tea();
// another functions , parameterized
function abc(a,b,c){
    console.log(a,b,c);
}
abc(1,2,3)
// these 1,2,3 are called real values or arguments