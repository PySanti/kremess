import { bodyLoadedClassName, loaderClassName, loaderDEACTIVATEDClassName, mainContainerActivated, mainContainerClassName } from "."

export function loadScreen(){
    let intervalContainer = setInterval(()=>{
        if (document.readyState === "complete"){
                console.log("Hola")
                const loader = document.getElementsByClassName(loaderClassName)[0]
                const mainContainer = document.getElementsByClassName(mainContainerClassName)[0]
                document.getElementsByTagName("body")[0].classList.add(bodyLoadedClassName)
                loader.classList.add(loaderDEACTIVATEDClassName)
                mainContainer.classList.add(mainContainerActivated)
                clearInterval(intervalContainer)
        }
    },100)
}
