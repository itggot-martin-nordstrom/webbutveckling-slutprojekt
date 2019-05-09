// console.log(document.querySelector(".button--to_top"))


// POKEMON NAVIGATION
function scrollTop(){
    document.querySelector("article").scrollIntoView({
        behavior: 'smooth'
    })
}
// console.log(document.querySelector(".button--to_top"))
let elmeBtnTo = document.querySelector(".button--to_top")
if(elmeBtnTo){
    elmeBtnTo.addEventListener("click", scrollTop)
}

var stat = document.querySelectorAll('[stat]')
for(var i = 0; i < stat.length; i++){
    stat[i].style.width = stat[i].attributes.stat.value +'%'
}


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

// document.querySelector("#scroll--id-1").classList.add("scroll-nav-active")
// INDEX NAVIGATION
function indexNav(input){
    // var currentId
    // if(input == "#001")
    console.log(input)

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

    // underline active
    // if(currentId < 51){
    //     document.querySelector("#scroll--id-1").classList.add("scroll-nav-active")
    //     document.querySelector("#scroll--id-51").classList.remove("scroll-nav-active")
    //     document.querySelector("#scroll--id-101").classList.remove("scroll-nav-active")
    //     document.querySelector("#scroll--id-151").classList.remove("scroll-nav-active")
    // }else if(currentId < 101){
    //     document.querySelector("#scroll--id-1").classList.remove("scroll-nav-active")
    //     document.querySelector("#scroll--id-51").classList.add("scroll-nav-active")
    //     document.querySelector("#scroll--id-101").classList.remove("scroll-nav-active")
    //     document.querySelector("#scroll--id-151").classList.remove("scroll-nav-active") 
    // }else if(currentId < 151 ){
    //     document.querySelector("#scroll--id-1").classList.remove("scroll-nav-active")
    //     document.querySelector("#scroll--id-51").classList.remove("scroll-nav-active")
    //     document.querySelector("#scroll--id-101").classList.add("scroll-nav-active")
    //     document.querySelector("#scroll--id-151").classList.remove("scroll-nav-active")
    // }else if(currentId == 151 ){
    //     document.querySelector("#scroll--id-1").classList.remove("scroll-nav-active")
    //     document.querySelector("#scroll--id-51").classList.remove("scroll-nav-active")
    //     document.querySelector("#scroll--id-101").classList.remove("scroll-nav-active")
    //     document.querySelector("#scroll--id-151").classList.add("scroll-nav-active")
    // }

    goToId = "#pokemon_article" + (currentId)
    document.querySelector(goToId).scrollIntoView({
        behavior: "smooth"     
    })
}
