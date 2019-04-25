

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
            
let lastScroll = -1
currentId = 1
currentDate = 0

window.addEventListener("scroll", function(event){
    if (Date.now() - currentDate > 1000){
        
        if(window.scrollY > lastScroll){
            console.log("down")
            currentId += 1
        }else{
            console.log("up")
            currentId -= 1
        }
        goToId = "#pokemon_article" + (currentId)
        document.querySelector(goToId).scrollIntoView({
            behavior: "smooth"
        })
        
        currentDate = Date.now()
    }
    
    // fungerar med piltangenter, antagligen för många inputs vid scroll. 
    // piltangenter ger ~30 inputs, så det antalet spelar ingen riktig roll.

    console.log(currentId)
    lastScroll = window.scrollY
})

