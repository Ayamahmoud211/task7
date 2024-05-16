// part1
let img1=document.querySelector(".img1");
let img2=document.querySelector(".img2");
let img3=document.querySelector(".img3");
let img4=document.querySelector(".img4");
let img5=document.querySelector(".img5");
let image=document.querySelector(".image");
const ground=document.querySelector(".section1")
let h1_sec1=document.querySelector(".h1-sec1")
let p_sec1=document.querySelector(".p-sec1")
function changecolor(element){
       image.src=element.src
       switch(element.src)
       {
         case img1.src :
            ground.style.backgroundColor="#d2bfbf"
            h1_sec1.style.color="black"
            p_sec1  .style.color="black"
            break;
         case img2.src :
            ground.style.backgroundColor="#607281"
            h1_sec1.style.color="#fff"
            p_sec1  .style.color="#fff" 
            break;
         case img3.src :
            ground.style.backgroundColor="#000"
            h1_sec1.style.color="#fff"
            p_sec1  .style.color="#fff" 
            break;
         case img4.src:
            ground.style.backgroundColor="#3b3e40" 
            h1_sec1.style.color="#fff"
            p_sec1  .style.color="#fff"
            break;
         case img5.src:
            ground.style.backgroundColor="#c82624"
            h1_sec1.style.color="#fff"
            p_sec1  .style.color="#fff"
            break
      }

   } 
   localStorage



// part2
let section2=document.querySelector(".section2")

function darkmode(){
   section2.classList.toggle("darkmode")
}

// part3
let div=document.querySelectorAll(".div")
let up=document.querySelectorAll(".up")
let hidden=document.querySelectorAll(".hidden")
let down=document.querySelectorAll(".down")

for (let index = 0; index < down.length; index++) {
   down[index].addEventListener("click" , ()=> {
      down[index].style.display = "none"
      up[index].style.display = "inline"
      hidden[index].style.display = "block"
      // down[index].classList.toggle("down1")
      // up[index].classList.toggle("up1")
      // hidden[index].classList.toggle("up1")
   })
   
}
for (let index = 0; index < up.length; index++) {
   up[index].addEventListener("click" , ()=> {
      down[index].style.display = "inline"
      up[index].style.display = "none"
      hidden[index].style.display = "none"
   })
   
}


// part4
let star=document.querySelectorAll(".star")
for (let i = 0; i < star.length; i++) {
   star[i].addEventListener("click" , ()=>{
      for (let j = 0; j < star.length; j++) {
         // j<=i?  star[j].classList.add("colory") : star[j].classList.remove("colory")
         if (j<=i) {
            star[j].classList.add("colory")
         }
         else {
            star[j].classList.remove("colory")
         }
         
      }
   })
   
}




