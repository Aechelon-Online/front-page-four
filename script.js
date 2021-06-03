
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

divOne.addEventListener("click", () => {
    divOne.style.animation = "divSwell 2s forwards"
    divTwo.style.animation = "divShrink 2s forwards"
    divThree.style.animation = "divShrink 2s forwards"
    divFour.style.animation = "divShrink 2s forwards"
    header1.style.animation = "headTop 2s forwards"
    header2.style.animation = "headShrink 2s forwards"
    header3.style.animation = "headShrink 2s forwards"
    header4.style.animation = "headShrink 2s forwards"
    body.style.animation = "bodyFix 2s forwards"
})