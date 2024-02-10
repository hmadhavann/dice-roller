window.addEventListener("load", function() {
    rollDice();
});

function rollDice() {
    const number = Math.floor(Math.random() * 6) + 1;
    var diceImage= "dice_images/dice" + number + ".png"
    document.querySelector("img").setAttribute("src", diceImage);
    

}
//const button = document.querySelector("button");

//button.addEventListener("keyup",(e) => {
    
//if (e.keyCode === 13){
        //rollDice();
   // }
//});



