
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
const img1 = document.querySelector(".pic")
const img2 = document.querySelector(".pic2")
const h1 = document.querySelector("h1")
const headWrap = document.querySelector(".head-wrap")
const flexGrid1 = document.querySelector(".flex-grid1")
const text1 = document.querySelector(".text")
const text2 = document.querySelector(".text2")
let time = "1.5s"

divOne.addEventListener("click", () => {
    divOne.style.animation = `divHeader ${time} forwards`
    divTwo.style.animation = `divShrink ${time} forwards`
    divThree.style.animation = `divShrink ${time} forwards`
    divFour.style.animation = `divShrink ${time} forwards`
    header2.style.animation = `headShrink ${time} forwards`
    header3.style.animation = `headShrink ${time} forwards`
    header4.style.animation = `headShrink ${time} forwards`
    body.style.animation = `bodyFix1 ${time} forwards`
    back1.classList.remove("hide")
    flexGrid1.classList.remove("hide")
    flexGrid1.style.width = "100vw"
    flexGrid1.style.height = "90vh"
    setTimeout(imgShow, 500)
    function imgShow() {
        img1.classList.remove("hide")
        text1.classList.remove("hide")
        img1.style.animation = "imgFadeIn 4s"
        text1.style.animation = "imgFadeIn 4s"
        img2.classList.remove("hide")
        text2.classList.remove("hide")
        img2.style.animation = "imgFadeIn 4s"
        text2.style.animation = "imgFadeIn 4s"
        flexGrid1.style.gridGap = "5px"
    }
    
})
divTwo.addEventListener("click", () => {
    divOne.style.animation = `divShrink ${time} forwards`
    divTwo.style.animation = `divHeader ${time} forwards`
    divThree.style.animation = `divShrink ${time} forwards`
    divFour.style.animation = `divShrink ${time} forwards`
    header1.style.animation = `headShrink ${time} forwards`
    header3.style.animation = `headShrink ${time} forwards`
    header4.style.animation = `headShrink ${time} forwards`
    body.style.animation = `bodyFix2 ${time} forwards`
    back2.classList.remove("hide")
    flexGrid1.classList.remove("hide")
    // flexGrid.style.gridGap = "1px"
})
divThree.addEventListener("click", () => {
    divOne.style.animation = `divShrink ${time} forwards`
    divTwo.style.animation = `divShrink ${time} forwards`
    divThree.style.animation = `divHeader2 ${time} forwards`
    divFour.style.animation = `divShrink ${time} forwards`
    header1.style.animation = `headShrink ${time} forwards`
    header2.style.animation = `headShrink ${time} forwards`
    header4.style.animation = `headShrink ${time} forwards`
    body.style.animation = `bodyFix3 ${time} forwards`
    back3.classList.remove("hide")
    flexGrid1.classList.remove("hide")
    // flexGrid.style.gridGap = "1px"
})
divFour.addEventListener("click", () => {
    divOne.style.animation = `divShrink ${time} forwards`
    divTwo.style.animation = `divShrink ${time} forwards`
    divThree.style.animation = `divShrink ${time} forwards`
    divFour.style.animation = `divHeader2 ${time} forwards`
    header1.style.animation = `headShrink ${time} forwards`
    header2.style.animation = `headShrink ${time} forwards`
    header3.style.animation = `headShrink ${time} forwards`
    body.style.animation = `bodyFix4 ${time} forwards`
    back4.classList.remove("hide")
    flexGrid1.classList.remove("hide")
    // flexGrid.style.gridGap = "1px"
})
back1.addEventListener("click", () => {
    back1.classList.add("hide")
    divOne.style.animation = `oneBack ${time} forwards`
    body.style.animation = `bodyOrig1 ${time} forwards`
    header2.style.animation = `headSwell ${time} forwards`
    header3.style.animation = `headSwell ${time} forwards`
    header4.style.animation = `headSwell ${time} forwards`
    divTwo.style.animation = `divSwell2 ${time} forwards`
    divThree.style.animation = `divSwell3 ${time} forwards`
    divFour.style.animation = `divSwell4 ${time} forwards`
    flexGrid1.classList.add("hide")
    flexGrid1.style.width = "0vw"
    flexGrid1.style.height = "0vh"
    img1.classList.add("hide")
    text1.classList.add("hide")
    img2.classList.add("hide")
    text2.classList.add("hide")
    setTimeout(divReset, 1500)
    
})
back2.addEventListener("click", () => {
    back2.classList.add("hide")
    divOne.style.animation = `divSwell1 ${time} forwards`
    body.style.animation = `bodyOrig2 ${time} forwards`
    header1.style.animation = `headSwell ${time} forwards`
    header3.style.animation = `headSwell ${time} forwards`
    header4.style.animation = `headSwell ${time} forwards`
    divTwo.style.animation = `twoBack ${time} forwards`
    divThree.style.animation = `divSwell3 ${time} forwards`
    divFour.style.animation = `divSwell4 ${time} forwards`
    flexGrid1.classList.add("hide")
    flexGrid1.style.gridGap = "0px"
    setTimeout(divReset, 1500)
    
})
back3.addEventListener("click", () => {
    back3.classList.add("hide")
    divOne.style.animation = `divSwell1 ${time} forwards`
    body.style.animation = `bodyOrig3 ${time} forwards`
    header1.style.animation = `headSwell ${time} forwards`
    header2.style.animation = `headSwell ${time} forwards`
    header4.style.animation = `headSwell ${time} forwards`
    divTwo.style.animation = `divSwell2 ${time} forwards`
    divThree.style.animation = `threeBack ${time} forwards`
    divFour.style.animation = `divSwell4 ${time} forwards`
    flexGrid1.classList.add("hide")
    flexGrid1.style.gridGap = "0px"
    setTimeout(divReset, 1500)
    
})
back4.addEventListener("click", () => {
    back4.classList.add("hide")
    divOne.style.animation = `divSwell1 ${time} forwards`
    body.style.animation = `bodyOrig4 ${time} forwards`
    header1.style.animation = `headSwell ${time} forwards`
    header2.style.animation = `headSwell ${time} forwards`
    header3.style.animation = `headSwell ${time} forwards`
    divTwo.style.animation = `divSwell2 ${time} forwards`
    divThree.style.animation = `divSwell3 ${time} forwards`
    divFour.style.animation = `fourBack ${time} forwards`
    flexGrid1.classList.add("hide")
    flexGrid1.style.gridGap = "0px"
    setTimeout(divReset, 1500)
    
})

function divReset() {
    divOne.style.animation = "divSway 12s ease-in-out infinite"
    divTwo.style.animation = "divSway 14s ease-in-out infinite"
    divThree.style.animation = "divSway 11s ease-in-out infinite"
    divFour.style.animation = "divSway 13s ease-in-out infinite"
}