import { bodyLoadedClassName, loaderClassName, loaderDEACTIVATEDClassName, mainContainerActivated, mainContainerClassName } from "."

var loaderInterval = setInterval(loadScreen, 100)

function paginaCargada(){
    if (document.readyState === "loaded" || document.readyState === "interactive" || document.readyState === "complete") {
        clearInterval(loaderInterval);
        return true;
    }
}

export function loadScreen(){
    console.log("Hola")
    if (paginaCargada){
        const loader = document.getElementsByClassName(loaderClassName)[0]
        const mainContainer = document.getElementsByClassName(mainContainerClassName)[0]
        document.getElementsByTagName("body")[0].classList.add(bodyLoadedClassName)
        loader.classList.add(loaderDEACTIVATEDClassName)
        mainContainer.classList.add(mainContainerActivated)
    }
}