import { bodyLoadedClassName, loaderClassName, loaderDEACTIVATEDClassName, mainContainerActivated, mainContainerClassName } from "."

export function loadScreen(){
    const loader = document.getElementsByClassName(loaderClassName)[0]
    const mainContainer = document.getElementsByClassName(mainContainerClassName)[0]
    window.addEventListener("click", ()=>{
        document.getElementsByTagName("body")[0].classList.add(bodyLoadedClassName)
        loader.classList.add(loaderDEACTIVATEDClassName)
        mainContainer.classList.add(mainContainerActivated)
    })
}