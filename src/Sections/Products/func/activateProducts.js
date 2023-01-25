import { productItemACTIVATEDClassName } from "../../..";

export function activateProducts(productClassName){
    const productsList = document.getElementsByClassName(productClassName);
    window.addEventListener("scroll", (e)=>{
        let productTop = undefined
        for (let i = 0; i < productsList.length; i++){
            productTop = productsList[i].getBoundingClientRect().top
            if (productTop < (window.innerHeight/3)){
                productsList[i].classList.add(productItemACTIVATEDClassName)
            }
        }
    })
}
