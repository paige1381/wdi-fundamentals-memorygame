var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];




var checkForMatch = function(cardId,card) {
	console.log(this);
	card.setAttribute('src',cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		}
		else {
			alert("Sorry, try again.");
		}
	}
}

/* Hint #2: Just as we did in the last step, we can use the `this` keyword to 
access the element the user just clicked on. Except now instead of getting an 
attribute, we want to _set_ the `src` attribute.

Hint #3: We'll want to make sure that there are _no quotation marks_ surrounding 
the new value of the `src` attribute (cards[cardId].cardImage) when we use the 
`setAttribute()` method.*/

var flipCard = function() {
	console.log(this);
	var cardId = this.getAttribute('data-id');
	console.log(cardId);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch(cardId,this);
}

var createBoard = function() {
	for(i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();

