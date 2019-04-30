console.log(document.querySelector(".button--to_top"))

function scrollTop(){
    document.querySelector("article").scrollIntoView({
        behavior: 'smooth'
    })
}
document.querySelector(".button--to_top").addEventListener("click", scrollTop)


// function scrollMove(currentId){
//     console.log(currentId)
    
//     var goToId
//     console.log(goToId)
    
//     if(window.scrollY > lastScroll){
//         console.log("down")
//         goToId = "#pokemon_article" + (currentId + 1)
//     }else{
//         console.log("up")
//         goToId = "#pokemon_article" + (currentId - 1)
//     }
        
//     lastScroll = window.scrollY
        
//     document.querySelector(goToId).scrollIntoView({
//         behavior: "smooth"
//     })
// }
let scrollEvent = null
let lastScroll = -1
currentId = 0
currentDate = 0

document.querySelector("#pokemon_article1").scrollIntoView()

let scroller = function(event){
    console.log("OMG")
    // window.removeEventListener("scroll", scroller )
    // funktionen kan bara köras en gång var 1000nde millisekund
    if (Date.now() - currentDate > 1000){
        
        if(window.scrollY > lastScroll){
            console.log("down")
            currentId += 1
        }else{
            console.log("up")
            currentId -= 1
        }

        if(currentId < 1){
            currentId = 1
        }else if(currentId > 151){
            currentId = 151
        }
        goToId = "#pokemon_article" + (currentId)
        document.querySelector(goToId).scrollIntoView({
            behavior: "smooth"
        
        })
        
        currentDate = Date.now()
    }

    // DEBUGGING
    // fungerar med piltangenter, antagligen för många inputs vid scroll. 
    // piltangenter ger ~30 inputs, så det antalet spelar ingen riktig roll.

    console.log(goToId)
    lastScroll = window.scrollY
}


scrollEvent = window.addEventListener("scroll", scroller)

