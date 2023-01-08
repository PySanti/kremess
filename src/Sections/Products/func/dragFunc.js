import { productsListClassName } from "../../..";

let pressed = false

function getLeft(cssLeft){
    let newLeft = cssLeft.split("vw")[0];
    if (!newLeft){
        return 0;
    } else {
        return newLeft
    }
}

export function dragFunc(){
    const productsContainer = document.getElementsByClassName(productsListClassName)[0]
    productsContainer.addEventListener("mousedown", (e)=>{
        pressed = true
        console.log(pressed)
    })
    productsContainer.addEventListener("mouseup", (e)=>{
        pressed = false
        console.log(pressed)
    })
    productsContainer.addEventListener("mousemove", (e)=>{
        if (pressed){
            const currentLeft = Number(getLeft(productsContainer.style.left))
            const newLeft = currentLeft + e.movementX/10
            console.log(newLeft)
            if ((newLeft < 50) && (newLeft > -50)){
                productsContainer.style.left = `${newLeft}vw`
            }
        }
    })
}