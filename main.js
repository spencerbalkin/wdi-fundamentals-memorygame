var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo = cards[3];
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardsInPlay === 2) {
	result = 'true';
}	else if (cardsInPlay[0] === cardsInPlay[1]) {
	result = alert("You found a match!");
}	else {
	result = alert("Sorry, try again.")
}