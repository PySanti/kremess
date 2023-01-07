export function detectScroll(){
    const HTML = document.getElementsByTagName("body")[0]
    HTML.addEventListener("scroll", (e)=>{
        console.log(e)
    })
}