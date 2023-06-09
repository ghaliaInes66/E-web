const btndark=document.querySelector('.dark');
const btnlight=document.querySelector('.light');
var color=document.querySelector(':root');
const dark=document.querySelector('.dark');
const light=document.querySelector('.light');
const blue=document.querySelector('#blue');
const purple=document.querySelector('#purple');

dark.style.display='none';
light.style.display='inline-block';
color.style.setProperty('--color', '#0077B6');
color.style.setProperty('--textcolor','black');
color.style.setProperty('--backgroundColor','white');



function toLight(){
    dark.style.display='none';
    light.style.display='inline-block';
    color.style.setProperty('--color', '#0077B6');
    color.style.setProperty('--textcolor','black');
    color.style.setProperty('--backgroundColor','white');
    purple.style.display='none';
    blue.style.display='inline-block';
}
function toDark(){
    light.style.display='none';
    dark.style.display='inline-block';
    color.style.setProperty('--color', '#79616F');
    color.style.setProperty('--textcolor','white');
    color.style.setProperty('--backgroundColor','rgb(46, 45, 45)');
    blue.style.display='none';
    purple.style.display='inline-block';
}

btndark.addEventListener('click',toLight);
btnlight.addEventListener('click',toDark);