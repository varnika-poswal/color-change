const colors=['blue','red','green','orange','yellow','pink','purple','white'];
const change=document.getElementById("change");
const body=document.querySelector('body');
var colorIndex=0;
body.style.background=colors[colorIndex];
change.addEventListener("click",()=>{
   // body.style.background="pink";
   colorIndex=(Math.floor(Math.random()*colors.length));
  // console.log(colors.length);

  console.log(colorIndex);
  body.style.background=colors[colorIndex];
})