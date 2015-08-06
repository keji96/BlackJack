function cardDeck(){
    var suits = ['hearts', 'spades', "diamonds", "clubs"];
    var faceCards = ["J", "Q", "K", "A"]
    var deck = [];
    var card;
    var actualValue;

    for(var i=0; i<suits.length; i++){
        for(var j=2; j<11; j++){
            card = {
              suit: j + " " + suits[i],
              gameValue: j
            };
            deck.push(card);
        }

       for(var k = 0; k < faceCards.length;k++ ){
          if(faceCards[k] === "A"){
              actualValue = 11
          }else{actualValue = 10}

           card ={
               suit:faceCards[k] +" " +suits[i],

               gameValue: actualValue
           }
          deck.push(card);
       } // facecards including ace


    }
    return deck;
}
//Test: Generate a standard 52 card Playing Deck
var deck = cardDeck()

function card(deck){

var randomIndex = Math.floor(Math.random()*deck.length);
   card1 = deck.splice(randomIndex, 1)[0];
  return card1;

}
//Test Randomly Select one card from the Deck

function player(card){
   var playerHand = []
   var hitCardValue = hitMe(card(deck))
    playerHand[0] = card(deck);
    playerHand[1] = card(deck);

var playerhandValue = playerHand[0].gameValue + playerHand[1].gameValue + hitCardValue

}
//Test deal two cards to the player and record thier summed value.


function dealer(card){
   var dealerHand = []
  dealerHand[0] = card(deck);
  dealerHand[1] = card(deck);
 var dealerhandValue = dealerHand[0].gameValue + dealerHand[1].gameValue

 while(dealerhandValue < 16){
     var hitCardValue = hitMe(card(deck))

     dealerhandValue += hitCardValue

 }
 //Test Deal two cards to the deal record sum value, make the dealer a hit if dealers hand is less than 16.


}dealer(deal);

function hitMe(card){
    return card.gameValue
}
 //Test generate one random card to give to the player if requested or to the deal if the value of the dealers hand is under 16.
