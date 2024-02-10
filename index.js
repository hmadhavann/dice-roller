
function rollDice() {
    //const diceImage = document.getElementById("diceImage");
    //const numbers = [];
   // const image = [];
    const number = Math.floor(Math.random() * 6) + 1;
    console.log(number);
   // numbers.push(number);
    var imagePath = "dice_image/dice" + number + ".png"
    //image.push(`<img src="dice_images/dice + {number}.png">`)
    //console.log(numbers);
    var diceImageDiv = document.getElementById("diceImage");
    diceImageDiv.innerHTML = `<img src="` + imagePath + `"alt-"Dice ` + number + `">`;

}

