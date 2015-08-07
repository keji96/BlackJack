$(document).ready(function() {
  console.log('Loaded, bro');
  init();
});



function init(){
function cardDeck(){
    var suits = ['hearts', 'spades', "diams", "clubs"];
    var faceCards = ["J", "Q", "K", "A"]
    var deck = [];
    var card;
    var actualValue;

    for(var i=0; i<suits.length; i++){
        for(var j=2; j<11; j++){
            card = {
              suit: suits[i],
              number:j + "",
              gameValue: j
            };
            deck.push(card);
        }

       for(var k = 0; k < faceCards.length;k++ ){
          if(faceCards[k] === "A"){
              actualValue = 11
          }else{actualValue = 10}

           card ={
               suit:suits[i],
               number:faceCards[k],
               gameValue: actualValue
           }
          deck.push(card);
       }


    }
    return deck;
}
//Test: Generate a standard 52 card Playing Deck


var deck = cardDeck()

function card(deck){

var randomIndex = Math.floor(Math.random()*deck.length);
   card1 = deck.splice(randomIndex, 1)[0];
  console.log(card1)
  return card1;

}
//Test: Randomly Select one card from the Deck

function player(card){
   var playerHand = []
    playerHand[0] = card(deck);
    playerHand[1] = card(deck);
   var playerhandValue = playerHand[0].gameValue + playerHand[1].gameValue;
  playercard1 = cardGenerator(playerHand[0].number, playerHand[0].suit);
  console.log(playerHand[0].suit)

  var playerConsole = $(".Player");
    playerConsole.append(playercard1);

 return playerhandValue;
}

var playerValue = player(card)


//console.log(playerValue);

//Test deal two cards to the player and record thier summed value.


function dealer(card){
   var dealerHand = []
  dealerHand[0] = card(deck);
  dealerHand[1] = card(deck);
 var dealerhandValue = dealerHand[0].gameValue + dealerHand[1].gameValue;

 while(dealerhandValue < 16){
     var hitCardValue = hitMe(card(deck))

     dealerhandValue += hitCardValue.gameValue
   return dealerhandValue;
 }
 //Test Deal two cards to the dealer record sum value, make the dealer a hit if dealers hand is less than 16.


}//alert(dealer(card));

function hitMe(card){
    return card;
}
 var playerHitCard = hitMe(card)
//Test generate one random card to give to the player if requested or to the deal if the value of the dealers hand is under 16.

$("#hitme").click(function(e){
  console.log("second" + playerValue)
  var playerHit = hitMe(card(deck))
  console.log("hit" + playerHit.gameValue)

  playerValue += playerHit.gameValue;

  console.log("third" + playerValue)

 });

//Test :playervalue = playerValue + the hit me card when hit me is pressed and hit card is displayed

function cardGenerator(number, suit){
var card = $('<div>').addClass("card");
    card.css('background','black');
    card.css('borderColor','#808080 #000000 #000000 #808080')
    card.css('borderWidth', '2px');
    card.css('border-style', 'solid');
    card.css('color', 'white');
    card.css('fontSize', '20pt');
    card.css('position', 'absolute');
    card.css("width",'3.75em');
    card.css('height', '5.00em');

var symbol = $('<div>').addClass('spotCenter')
    var suit = suit;
    console.log(suit);
    symbol.html("&"+suit+";");
    symbol.css('fontSize', '250%')
    symbol.css('position', 'absolute')
    symbol.css('left','0.325em')
    symbol.css('top', '0.375em')
    card.append(symbol);

  var numforCard = $('<div>').addClass('spotTopLeft');
      numforCard.css('position', 'absolute');
      numforCard.css('left','0.60em');
      numforCard.css('top', '0.5em');
      numforCard.text(number);
     card.append(numforCard);


return card
}

//Test Generate a 'real' deck of cards so players can see there hands.


}
