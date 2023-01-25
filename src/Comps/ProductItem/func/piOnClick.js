import { productItemImageCLICKEDClassName, productItemImageClassName } from "../../..";

function addEvent(currentImg){
    currentImg.addEventListener("click", (e)=>{
        currentImg.classList.toggle(productItemImageCLICKEDClassName)
    })
}

export function piOnclick(){
    const piIMGList = document.getElementsByClassName(productItemImageClassName)
    let currentImg = ""
    for (let i = 0; i < piIMGList.length; i++){
        currentImg = piIMGList[i]
        addEvent(currentImg)
    }
}