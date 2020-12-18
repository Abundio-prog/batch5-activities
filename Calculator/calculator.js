//document.querySelector('.display').value = document.querySelector('#numbers').innerHTML
const display = document.getElementById('display');
const num  = document.querySelectorAll('.numbers button');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
const operator = document.querySelectorAll('operator button');

const valInpt = false;

equals.addEventListener('click', ()=>{
   display.value  = eval(display.value);
});

clear.addEventListener('click', ()=>{
   display.value  = "";
});



for(let i = 0;i<=num.length; i++){
   
   num[i].addEventListener('click', (e) =>{
      
       const newInpt = display.value;
       const addChar = newInpt[newInpt.length -1];

       if (valInpt === false) {
           display.value += e.target.innerHTML;
         } 
       else if(valInpt === true && addChar === "+"|| addChar === "-"|| addChar === "*" ||addChar === "/"){
           valInpt = false;
           display.value = "";
           display.value += e.target.innerHTML;

       }

   });
   
}

