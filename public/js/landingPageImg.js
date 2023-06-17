const btndark=document.querySelector('.dark');
const btnlight=document.querySelector('.light');
const blue=document.querySelector('#blue');
const purple=document.querySelector('#purple');

function toLight(){
    purple.style.display='none';
    blue.style.display='inline-block';
 }
 function toDark(){ 
   blue.style.display='none';
    purple.style.display='inline-block';
 }

btndark.addEventListener('click',toLight);
btnlight.addEventListener('click',toDark);

