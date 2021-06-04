
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
const back1 = document.querySelector(".back1")
const back2 = document.querySelector(".back2")
const back3 = document.querySelector(".back3")
const back4 = document.querySelector(".back4")

divOne.addEventListener("click", () => {
    divOne.style.animation = "divHeader 2s forwards"
    divTwo.style.animation = "divShrink 2s forwards"
    divThree.style.animation = "divShrink 2s forwards"
    divFour.style.animation = "divShrink 2s forwards"
    header2.style.animation = "headShrink 2s forwards"
    header3.style.animation = "headShrink 2s forwards"
    header4.style.animation = "headShrink 2s forwards"
    body.style.animation = "bodyFix1 2s forwards"
    back1.classList.remove("hide")
})
divTwo.addEventListener("click", () => {
    divOne.style.animation = "divShrink 2s forwards"
    divTwo.style.animation = "divHeader 2s forwards"
    divThree.style.animation = "divShrink 2s forwards"
    divFour.style.animation = "divShrink 2s forwards"
    header1.style.animation = "headShrink 2s forwards"
    header3.style.animation = "headShrink 2s forwards"
    header4.style.animation = "headShrink 2s forwards"
    body.style.animation = "bodyFix2 2s forwards"
    back2.classList.remove("hide")
})
divThree.addEventListener("click", () => {
    divOne.style.animation = "divShrink 2s forwards"
    divTwo.style.animation = "divShrink 2s forwards"
    divThree.style.animation = "divHeader 2s forwards"
    divFour.style.animation = "divShrink 2s forwards"
    header1.style.animation = "headShrink 2s forwards"
    header2.style.animation = "headShrink 2s forwards"
    header4.style.animation = "headShrink 2s forwards"
    body.style.animation = "bodyFix3 2s forwards"
    back3.classList.remove("hide")
})
divFour.addEventListener("click", () => {
    divOne.style.animation = "divShrink 2s forwards"
    divTwo.style.animation = "divShrink 2s forwards"
    divThree.style.animation = "divShrink 2s forwards"
    divFour.style.animation = "divHeader 2s forwards"
    header1.style.animation = "headShrink 2s forwards"
    header2.style.animation = "headShrink 2s forwards"
    header3.style.animation = "headShrink 2s forwards"
    body.style.animation = "bodyFix4 2s forwards"
    back4.classList.remove("hide")
})
back1.addEventListener("click", () => {
    back1.classList.add("hide")
    divOne.style.animation = "oneBack 2s forwards"
    body.style.animation = "bodyOrig1 2s forwards"
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
back2.addEventListener("click", () => {
    back2.classList.add("hide")
    divOne.style.animation = "divSwell1 2s forwards"
    body.style.animation = "bodyOrig2 2s forwards"
    header1.style.animation = "headSwell 2s forwards"
    header3.style.animation = "headSwell 2s forwards"
    header4.style.animation = "headSwell 2s forwards"
    divTwo.style.animation = "twoBack 2s forwards"
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
back3.addEventListener("click", () => {
    back3.classList.add("hide")
    divOne.style.animation = "divSwell1 2s forwards"
    body.style.animation = "bodyOrig3 2s forwards"
    header1.style.animation = "headSwell 2s forwards"
    header2.style.animation = "headSwell 2s forwards"
    header4.style.animation = "headSwell 2s forwards"
    divTwo.style.animation = "divSwell2 2s forwards"
    divThree.style.animation = "threeBack 2s forwards"
    divFour.style.animation = "divSwell4 2s forwards"
    setTimeout(divReset, 2000)
    function divReset() {
        divOne.style.animation = "divSway 8s ease infinite"
        divTwo.style.animation = "divSway 10s ease infinite"
        divThree.style.animation = "divSway 7s ease infinite"
        divFour.style.animation = "divSway 9s ease infinite"
    }
})
back4.addEventListener("click", () => {
    back4.classList.add("hide")
    divOne.style.animation = "divSwell1 2s forwards"
    body.style.animation = "bodyOrig4 2s forwards"
    header1.style.animation = "headSwell 2s forwards"
    header2.style.animation = "headSwell 2s forwards"
    header3.style.animation = "headSwell 2s forwards"
    divTwo.style.animation = "divSwell2 2s forwards"
    divThree.style.animation = "divSwell3 2s forwards"
    divFour.style.animation = "fourBack 2s forwards"
    setTimeout(divReset, 2000)
    function divReset() {
        divOne.style.animation = "divSway 8s ease infinite"
        divTwo.style.animation = "divSway 10s ease infinite"
        divThree.style.animation = "divSway 7s ease infinite"
        divFour.style.animation = "divSway 9s ease infinite"
    }
})
