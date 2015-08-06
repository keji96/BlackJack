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

var deck = cardDeck()

//Test: generate a standard 52 card playing deck

function deal(deck){
var randomIndex = Math.floor(Math.random()*deck.length);
   card1 = deck.splice(randomIndex, 1)[0];
   console.log(card1);

}deal(deck)

//Test: Randomly select one card from the deck
var playerHand = []
function player(card){

     playerHand[0] = card(deck);
      playerHand[1] = card(deck);
      var playerhandValue = playerHand[0].gameValue + playerHand[1].gameValue;
      console.log(playerHand)
      console.log(playerhandValue)

}player(deal);

Test:// Assignn a player two random cards from the deck and tracks the value of those cards
