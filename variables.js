// var let const
// a special thidng that var is attach itself to window because javascript many features which are actulally comes from browser 
// just open the window and see there e.g setInteerval , setTimeOut, var amd many more are actually features of browser window
// var function scope hota hai,yeh apne parent function mein kaheen bhi use ho sakta hai
// let braces acope hota hai
function myfunc(){
    var i=1;
    for(i=1;i<10;i++){
        console.log(i)

    }
    console.log(i)

}
myfunc()
//otherwise in other languages we cannot access this i outside of for loop body
// you replacec thei var with let it will not work because let is braces acope