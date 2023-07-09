
const leftEye = document.querySelector("#lefteye")
const rightEye = document.querySelector("#righteye")
const userInput = document.querySelector("#userInput")
const passInput = document.querySelector("#passInput")

let userNameIn = 0 

let leftEyeTop = 75;
let leftEyeLeft = 110;
let leftEyePaddingLeft = 0
let leftEyePaddingTop = 0

let rightEyeTop = 75;
let rightEyeLeft = 174;
let rightEyePaddingLeft = 0
let rigthEyePaddingTop = 0

console.log(userInput.length);


const userInputFocus = () => {
    console.log("focus");

    let eyeUserNamePosirion = setInterval(() => {
        if (rigthEyePaddingTop == 10) {
            clearInterval(eyeUserNamePosirion)
        }

        rightEye.style.paddingTop = rigthEyePaddingTop + "px"
        rightEye.style.left = rightEyeLeft + "px"
        leftEye.style.paddingTop = leftEyePaddingTop + "px"
        leftEye.style.left = leftEyeLeft + "px"
        rigthEyePaddingTop++
        leftEyePaddingTop++
        leftEyeLeft--
        rightEyeLeft--


    }, 10)
}
const userInputBlur = () => {
    console.log("blur");
    let eyeUserNamePosirion = setInterval(() => {
        if (rigthEyePaddingTop == 0) {
            clearInterval(eyeUserNamePosirion)
        }

        rightEye.style.paddingTop = rigthEyePaddingTop + "px"
        rightEye.style.left = rightEyeLeft + "px"
        leftEye.style.paddingTop = leftEyePaddingTop + "px"
        leftEye.style.left = leftEyeLeft + "px"

        leftEye.style.paddingLeft = 0 + "px"
        rightEye.style.paddingLeft = 0 + "px"


        rigthEyePaddingTop--
        leftEyePaddingTop--
        leftEyeLeft++
        rightEyeLeft++


    }, 10)
}
const userkyedown = (event) => {
    console.log(leftEyePaddingLeft);


    // if(leftEyePaddingLeft > 20){
    //     return false
    // }



    if (event.keyCode === 8) {
        if (leftEyePaddingLeft == 1) {

            leftEyePaddingLeft = 0
            rightEyePaddingLeft = 0


        }
        leftEyePaddingLeft = Math.abs(leftEyePaddingLeft - 1)
        rightEyePaddingLeft = Math.abs(rightEyePaddingLeft - 1)


    } else if (leftEyePaddingLeft < 20) {

        leftEyePaddingLeft++
        rightEyePaddingLeft++
    }

    leftEye.style.paddingLeft = leftEyePaddingLeft + "px"
    rightEye.style.paddingLeft = rightEyePaddingLeft + "px"
}

const passInputFocus = () => {

    console.log("focus");
    let eyePosition = setInterval(() => {
        if (leftEyeTop === 60) {
            clearInterval(eyePosition)
        }

        leftEye.style.top = leftEyeTop + 'px'
        leftEye.style.left = leftEyeLeft + 'px'
        leftEye.style.paddingLeft = leftEyePaddingLeft + 'px'
        leftEye.style.paddingTop = leftEyePaddingTop + 'px'

        rightEye.style.top = rightEyeTop + 'px'
        rightEye.style.left = rightEyeLeft + 'px'
        rightEye.style.paddingLeft = rightEyePaddingLeft + 'px'
        rightEye.style.paddingTop = rigthEyePaddingTop + 'px'


        leftEyeLeft = 110
        rightEyeLeft = 174
        leftEyePaddingLeft = 0
        rightEyePaddingLeft = 0
        leftEyePaddingTop = 0
        rigthEyePaddingTop = 0


        leftEyeTop--
        leftEyeLeft++

        rightEyeLeft--
        rightEyeTop--

    }, 10)
}
const passInputBlur = () => {
    console.log("blur");

    let eyePosition = setInterval(() => {
        if (leftEyeTop === 75) {
            clearInterval(eyePosition)
        }

        leftEye.style.top = leftEyeTop + 'px'
        leftEye.style.left = leftEyeLeft + 'px'

        rightEye.style.top = rightEyeTop + 'px'
        rightEye.style.left = rightEyeLeft + 'px'


        leftEyeLeft = 110
        rightEyeLeft = 174
        leftEyePaddingLeft = 20
        rightEyePaddingLeft = 20 


        leftEyeTop++
        leftEyeLeft--

        rightEyeLeft++
        rightEyeTop++

    }, 10)
}





userInput.addEventListener("focus", userInputFocus)
userInput.addEventListener("blur", userInputBlur)
userInput.addEventListener("keydown", userkyedown)



passInput.addEventListener("focus", passInputFocus)
passInput.addEventListener("blur", passInputBlur)