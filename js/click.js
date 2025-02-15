let click = document.querySelector("#click")
let coin = 0


click.addEventListener("click", ()=>{
    let displayCoin = document.getElementById("displayCoin")
    let clickCoin = 1
    coin += clickCoin

    displayCoin.innerHTML = coin + " Waifu coins"


})

click.addEventListener('click', ()=>{
    let click2 = document.getElementById("click")
    click2.style.width = "270px"
    click2.style.height = "270px"
    setTimeout(normal, 500)
})

function normal(){
    let click2 = document.getElementById("click")

    click2.style.width = "280px"
    click2.style.height = "280px"
}