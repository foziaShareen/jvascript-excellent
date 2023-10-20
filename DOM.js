const a = document.querySelector('h1');
console.log(a);
a.innerHTML="now text is changed";
a.addEventListener('click',function(){
    console.log('how it was')
})
a.style.color="green";
const bulb = document.querySelector("#bulb");
var flag =0;
 bulbbutton.addEventListener('click',function(){
    if(flag==0){
        bulb.style.background="yellow";
        flag=1
    }
    else{
        bulb.style.background="black";
        flag=0

    }
   
})