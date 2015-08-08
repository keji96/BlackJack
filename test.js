console.log("scripts homies")
$(document).ready(function() {
  console.log('Loaded, bro');
  cardGenerator();
});


function cardGenerator(){
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
    card.css('left','1.0em')

var symbol = $('<div>').addClass('spotCenter')
    var hearts = "hearts"
    symbol.html("&"+hearts+";");
    symbol.css('fontSize', '250%')
    symbol.css('position', 'absolute')
    symbol.css('left','0.325em')
    symbol.css('top', '0.375em')
    card.append(symbol);

  var numforCard = $('<div>').addClass('spotTopLeft');
      numforCard.css('position', 'absolute');
      numforCard.css('left','0.60em');
      numforCard.css('top', '0.5em');
      numforCard.text('10');
     card.append(numforCard);


var body = $('body');
   body.append(card);
}
