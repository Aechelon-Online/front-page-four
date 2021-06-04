
const divOne = document.querySelector(".div1")
const divTwo = document.querySelector(".div2")
const divThree = document.querySelector(".div3")
const divFour = document.querySelector(".div4")
const header1 = document.querySelector(".tag1")
const header2 = document.querySelector(".tag2")
const header3 = document.querySelector(".tag3")
const header4 = document.querySelector(".tag4")
const html = document.querySelector("html")
const body = document.querySelector("body")
const oneBack = document.querySelector(".oneBack")
const back = document.querySelector(".back")

divOne.addEventListener("click", () => {
    divOne.style.animation = "divHeader 2s forwards"
    divTwo.style.animation = "divShrink 2s forwards"
    divThree.style.animation = "divShrink 2s forwards"
    divFour.style.animation = "divShrink 2s forwards"
    header2.style.animation = "headShrink 2s forwards"
    header3.style.animation = "headShrink 2s forwards"
    header4.style.animation = "headShrink 2s forwards"
    body.style.animation = "bodyFix 2s forwards"
    back.classList.remove("hide")
})
back.addEventListener("click", () => {
    back.classList.add("hide")
    divOne.style.animation = "oneBack 2s forwards"
    body.style.animation = "bodyOrig 2s forwards"
    header2.style.animation = "headSwell 2s forwards"
    header3.style.animation = "headSwell 2s forwards"
    header4.style.animation = "headSwell 2s forwards"
    divTwo.style.animation = "divSwell2 2s forwards"
    divThree.style.animation = "divSwell3 2s forwards"
    divFour.style.animation = "divSwell4 2s forwards"
    setTimeout(divReset, 2000)
    function divReset() {
        divOne.style.animation = "divSway 8s ease infinite"
        divTwo.style.animation = "divSway 10s ease infinite"
        divThree.style.animation = "divSway 7s ease infinite"
        divFour.style.animation = "divSway 9s ease infinite"
    }
})
