// console.log(document.querySelector(".button--to_top"))


// POKEMON NAVIGATION
function scrollTop(){
    document.querySelector("article").scrollIntoView({
        behavior: 'smooth'
    })
}
console.log(document.querySelector(".button--to_top"))
// document.querySelector(".button--to_top").addEventListener("click", scrollTop)



if(window.scrollY == 0){
    let elmeup = document.querySelector(".button--navigation-up")
    if(elmeup)
        elmeup.classList.add("hidden")
}else{
    let elmedown = document.querySelector(".button--navigation-up")
    if(elmedown)
        elmedown.classList.remove("hidden")
}

var articleHeight = document.querySelector("article").clientHeight
var currentId = Math.floor((window.scrollY / articleHeight) + 1)
console.log(currentId)

// INDEX NAVIGATION
function indexNav(input){
    // var currentId
    
    currentId += input
    if(currentId == 1){
        document.querySelector(".button--navigation-up").classList.add("hidden")
        // hide top button
    }else if(currentId == 151){
        // hide bottom button
        document.querySelector(".button--navigation-down").classList.add("hidden")
    }else{
        // show both buttons
        document.querySelector(".button--navigation-down").classList.remove("hidden")
        document.querySelector(".button--navigation-up").classList.remove("hidden")
    }
    console.log(currentId)

    if(currentId < 1){
        currentId = 1
    }else if(currentId > 151){
        currentId = 151
    }

    goToId = "#pokemon_article" + (currentId)
    document.querySelector(goToId).scrollIntoView({
        behavior: "smooth"     
    })
}
