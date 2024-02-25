window.addEventListener("load", function() {
    fetchRandomNumber();
});
/*
function rollDice() {
    const number = Math.floor(Math.random() * 6) + 1;
    var diceImage= "dice_images/dice" + number + ".png"
    document.querySelector("img").setAttribute("src", diceImage);
    

}
*/

async function fetchRandomNumber() {
    const url = "https://dice-roller-nodejs-hm.azurewebsites.net/getRandomNumber"
    const response = await fetch(url);
    const responseNum = await response.text();
    console.log(response);
    console.log(responseNum);
    
    let dice = parseInt(responseNum);
    let diceImagePath = `dice_images/dice${dice}.png`;
    document.getElementById("diceImage").src = diceImagePath;
}





