import { topLogoClassName } from "../../..";

export function topLogoScrollEfect(){
    const topLogo = document.getElementsByClassName(topLogoClassName)[0]
    window.addEventListener("scroll", (e)=>{
        if(window.scrollY === 0){
            topLogo.style.top = "0vh"
        } else {
            topLogo.style.top = "-20vh"
        }
    })
}