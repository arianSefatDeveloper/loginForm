
 const leftEye= document.querySelector("#lefteye")
 const rightEye= document.querySelector("#righteye")
 const userInput= document.querySelector("#userInput")
 const passInput= document.querySelector("#passInput")



 const leftEyeTop = 75;
 const leftEyeLeft = 110;
 const leftEyePaddingLeft = 0
 const leftEyePaddingTop = 0

 const rightEyeTop = 75;
 const rightEyeLeft = 174;
 const rightEyePaddingLeft = 0
 const rigthEyePaddingTop = 0




 const userInputFocus = ()=>{
    console.log("focus");
 }
 const userInputBlur = ()=>{
    console.log("blur");
 }
 const userkyepress = ()=>{
    console.log("press");
 }
 
 const passInputFocus = ()=>{
    console.log("focus");
 }
 const passInputBlur = ()=>{
    console.log("blur");
 }



 

 userInput.addEventListener("focus" , userInputFocus)
 userInput.addEventListener("blur" , userInputBlur)
 userInput.addEventListener("keypress" , userkyepress)



 passInput.addEventListener("focus" , passInputFocus)
 passInput.addEventListener("blur" , passInputBlur)