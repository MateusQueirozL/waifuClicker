let click = document.querySelector("#click")
let coin = 0

click.addEventListener("click", ()=>{
    let displayCoin = document.getElementById("displayCoin")
    let clickCoin = 1
    coin += clickCoin

    displayCoin.innerHTML = coin + " Waifu coins"


})