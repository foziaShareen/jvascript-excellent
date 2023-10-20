// primitives number undefined null boolean
// reference (),{},[]
//example of primitive
// yeh exact copy hote hein , 
var a = 10;
var b= a;
// agar a ki value change karein gey to b ki value changle nahi hogi, because copy mein new location milti hai
a=13;
console.log(a,b);
// a=13 , b=10
// now in case of reference example 
// there is one biscuit which is mine and als iqra's , if iqra eat the biscuit can i have my won , no 
// if we have variable without any bracket like  a =12; it can be copied , changes in one will not effect other
// but in case of bracket we have reference changes in one variable effect the other
var arr = [1,2,3];
var brr =arr;
brr.pop();
console.log(arr,brr)
// result id both hsve  [1,2]