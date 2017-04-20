var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},
{
rank: "queen",
suit: "diamonds",	
cardImage: "images/queen-of-diamonds.png",
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},
{
rank: "king",	
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",
},
];

var cardsInPlay = [];

var checkForMatch = function() {
	   if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }
};


var flipCard = function (cardId) {
  checkForMatch ();
//if I remove ^^ then it says "flipped queen" and king without the "you found a match"
	if (cardsInPlay === 2) {
	result = 'true';
}	else if (cardsInPlay[0] === cardsInPlay[1]) {
	result = alert("You found a match!");
}	else {
	result = alert("Sorry, try again.")
}
	console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].suit)
    console.log(cards[cardId].cardImage)
	cardsInPlay.push(cards[cardId].rank);
};

flipCard(0);
flipCard(2);



