
 const leftEye= document.querySelector("#lefteye")
 const rightEye= document.querySelector("#righteye")
 const userInput= document.querySelector("#userInput")
 const passInput= document.querySelector("#passInput")



 let  leftEyeTop = 75;
 let  leftEyeLeft = 110;
 let  leftEyePaddingLeft = 0
 let  leftEyePaddingTop = 0

 let  rightEyeTop = 75;
 let  rightEyeLeft = 174;
 let  rightEyePaddingLeft = 0
 let  rigthEyePaddingTop = 0




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
    let eyePosition = setInterval(()=>{
        if(leftEyeTop === 60){
            clearInterval(eyePosition)
        }

        leftEye.style.top = leftEyeTop +'px'
        leftEye.style.left = leftEyeLeft+'px'

        rightEye.style.top = rightEyeTop +'px'
        rightEye.style.left = rightEyeLeft +'px'


        leftEyeTop--
        leftEyeLeft++

        rightEyeLeft--
        rightEyeTop--

    },10)
 }
 const passInputBlur = ()=>{
    console.log("blur");

    let eyePosition = setInterval(()=>{
        if(leftEyeTop === 75){
            clearInterval(eyePosition)
        }

        leftEye.style.top = leftEyeTop +'px'
        leftEye.style.left = leftEyeLeft+'px'

        rightEye.style.top = rightEyeTop +'px'
        rightEye.style.left = rightEyeLeft +'px'


        leftEyeTop++
        leftEyeLeft--

        rightEyeLeft++
        rightEyeTop++

    },10)
 }



 

 userInput.addEventListener("focus" , userInputFocus)
 userInput.addEventListener("blur" , userInputBlur)
 userInput.addEventListener("keypress" , userkyepress)



 passInput.addEventListener("focus" , passInputFocus)
 passInput.addEventListener("blur" , passInputBlur)