$(document).ready(function() {
  console.log('Loaded, bro');
  init();
});



function init(){

var playerValue;
var dealerValue;
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
var deck = cardDeck()
//Test: Generate a standard 52 card Playing Deck

function cardGenerator(number, suit){
var displayCard = $('<div>').addClass("card");
    displayCard.css('background','black');
    displayCard.css('borderColor','#808080 #000000 #000000 #808080')
    displayCard.css('borderWidth', '2px');
    displayCard.css('border-style', 'solid');
    displayCard.css('color', 'white');
    displayCard.css('fontSize', '20pt');
    displayCard.css('position', 'absolute');
    displayCard.css("width",'3.75em');
    displayCard.css('height', '5.00em');
    displayCard.css('left','8.0em');
    displayCard.css('bottom', '0.375em');

var symbol = $('<div>').addClass('spotCenter')
    var suit = suit;
    //console.log(suit);
    symbol.html("&"+suit+";");
    symbol.css('fontSize', '250%')
    symbol.css('position', 'absolute')
    symbol.css('left','0.325em')
    symbol.css('top', '0.375em')
    displayCard.append(symbol);

  var numforCard = $('<div>').addClass('spotTopLeft');
      numforCard.css('position', 'absolute');
      numforCard.css('left','0.60em');
      numforCard.css('top', '0.5em');
      numforCard.text(number);
     displayCard.append(numforCard);


return displayCard
}

//Test Generate a 'real' deck of cards so players can see their hands.

function card(deck){

var randomIndex = Math.floor(Math.random()*deck.length);
   card1 = deck.splice(randomIndex, 1)[0];
  //console.log(card1)
  return card1;

}
//Test: Randomly Select one card from the Deck

function player(card){
   var playerHand = []
    playerHand[0] = card(deck);
    playerHand[1] = card(deck);
   var playerhandValue = playerHand[0].gameValue + playerHand[1].gameValue;
  playercard1 = cardGenerator(playerHand[0].number, playerHand[0].suit);
  playercard2 = cardGenerator(playerHand[1].number, playerHand[1].suit);
  playercard2.css('left','12.0em');
  playercard2.css('bottom', '0.375em');
  playercard1.css('bottom', '0.375em');
  //console.log(playerHand[0].suit);

  var playerConsole = $(".Player");
    playerConsole.append(playercard1);
    playerConsole.append(playercard2);
 return playerhandValue;
}


//Test deal two cards to the player and record thier summed value.


function dealer(card){
  var dealerHand = []
  dealerHand[0] = card(deck);
  dealerHand[1] = card(deck);
  dealerCard1 = cardGenerator(dealerHand[0].number, dealerHand[0].suit);
  dealerCard2 = cardGenerator(dealerHand[1].number, dealerHand[1].suit);

  var dealerCardSpacing = 12.0;
  dealerCard2.css('left',dealerCardSpacing +'em');
  dealerCard1.css('bottom', '0.375em');
  dealerCard2.css('bottom', '0.375em');
  dealerCard2.attr('id', 'seconddealerCard');
  dealerCard2.css('background','white');

 var dealerhandValue = dealerHand[0].gameValue + dealerHand[1].gameValue;
 var dealerConsole = $(".dealer");
 dealerConsole.append(dealerCard1);
 dealerConsole.append(dealerCard2);



return dealerhandValue;

}

 //Test Deal two cards to the dealer record sum value,



function hitMe(card){
    return card;
}
 var playerHitCard = hitMe(card)

//Test generate one random card to give to the player if requested or to the deal if the value of the dealers hand is under 16.

function dealerHits(dealerhandValue){
  var dealerHitCardspacing = 12;

  while(dealerhandValue < 16){
      var hitCardValue = hitMe(card(deck));

      dealerHitCardspacing +=4;
      var dealerhitCard = cardGenerator(hitCardValue.number, hitCardValue.suit);
      dealerhitCard.css('left', dealerHitCardspacing+'em');
      dealerhitCard.css('bottom', '0.375em');
      var dealerConsole = $(".dealer")
      dealerConsole.append(dealerhitCard);
      dealerhandValue += hitCardValue.gameValue;

 }
return dealerhandValue;
}
//Test: make the dealer take a hit if the value of the dealers hand is less than 16.


$('#deal').click(function(e){
  $( "div" ).remove( ".card" );
  $( "#hitme" ).show()
  $( "#stay" ).show()
  $( '.dealervalue' ).hide();
  playerValue = player(card);
  var displayPlayHand = "Player Hand: " + playerValue;
  var puttingHandValueOnBoard = $(".handvalue").text(displayPlayHand);
  puttingHandValueOnBoard.css('left','0.0em');
  puttingHandValueOnBoard.css('top', '0.0em');
  puttingHandValueOnBoard.css('fontSize', '250%')

  var playerConsole = $(".Player");
  playerConsole.append(puttingHandValueOnBoard);
  dealerValue = dealer(card);

});

//Test: Deal two random Cards to the player and the dealer when the deal button is pressed

var hitCardSpacing = 12;
$("#hitme").click(function(e){
  //console.log("second" + playerValue);
  var playerHit = hitMe(card(deck));

  hitCardSpacing +=4
  var hitDisplay = cardGenerator(playerHit.number, playerHit.suit)
  hitDisplay.css('left',hitCardSpacing+"em")
  var playerConsole = $(".Player");
  playerConsole.append(hitDisplay);
  //console.log("hit" + playerHit.gameValue);

  playerValue += playerHit.gameValue;
  var displayPlayHand = "Player Hand: " + playerValue;
  var puttingHandValueOnBoard = $(".handvalue").text(displayPlayHand);
  puttingHandValueOnBoard.text(displayPlayHand);


  if(playerValue > 21){
    alert("You Busted")
    $( "div" ).remove( ".card" )
    hitCardSpacing = 12;
    $( '#hitme' ).hide();
    $( '#stay' ).hide();
  }

 });

 //Test :give the player a random card when the hit me button is clicked.
 //Calculate the value of the player's hand based on the value of the hit card(s).
 //Tells a player when they have gone over 21

 $('#stay').click(function(e){
   $( '#hitme' ).hide();
   $( '#stay' ).hide();
var newDealerValue =  dealerHits(dealerValue)
  $ ('#seconddealerCard').css('background','black');
  $( '.dealervalue' ).show();
  var displayPlayHand = "Dealer Hand: " + newDealerValue;
  var puttingHandValueOnBoard = $(".dealervalue").text(displayPlayHand);
  puttingHandValueOnBoard.text(displayPlayHand);


  if (dealerValue > 21){
    alert("You win")
  } else if(playerValue > dealerValue){
      alert("You win")
    }else if(playerValue < dealerValue){
       alert("You lose")
    }else if(playerValue === dealerValue){
        alert("push")
    }
 });

//Test: allow the player to stay with the number of cards they currently have, call the dealer
//Display all the dealers cards and calculate the value of the dealers hand
//tell the player if they one or lost the hand update the players bank balance.




}
