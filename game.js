
var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence(){
    var randomNumber = Math.round(Math.random()*10/3);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
}