var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function () {
	  if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }
};

var flipCard = function (cardId) {
checkForMatch ();
//if I remove ^^ then it says "flipped queen" and king without the "sorry, try again"
	if (cardsInPlay === 2) {
	result = 'true';
}	else if (cardsInPlay[0] === cardsInPlay[1]) {
	result = alert("You found a match!");
}	else {
	result = alert("Sorry, try again.")
}
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
};

flipCard(0);
flipCard(2);



