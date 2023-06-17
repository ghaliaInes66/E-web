const btndark=document.querySelector('.dark');
const btnlight=document.querySelector('.light');
var color=document.querySelector(':root');
const menu=document.querySelector("#menu");
const menuBtn=document.querySelector('.menuBtn');
let on=false;

function themenu(){
    if(on==false)  {menu.style.right='0'; on=true;}
    else { menu.style.right='-40vw'; on=false;}
  }

 menuBtn.addEventListener('click',themenu);

 if (screen.width < screen.height) {
    btndark.src="./images/moon.png";
    btnlight.scr="./images/light.png";
}

function toLight(){
    btndark.style.display='none';
    btnlight.style.display='inline-block';
    color.style.setProperty('--color', '#0077B6');
    color.style.setProperty('--textcolor','black');
    color.style.setProperty('--backgroundColor','white');
}
function toDark(){
    btnlight.style.display='none';
    btndark.style.display='inline-block';
    color.style.setProperty('--color', '#79616F');
    color.style.setProperty('--textcolor','white');
    color.style.setProperty('--backgroundColor','rgb(46, 45, 45)');
}

    btndark.addEventListener('click',toLight);
    btnlight.addEventListener('click',toDark);


