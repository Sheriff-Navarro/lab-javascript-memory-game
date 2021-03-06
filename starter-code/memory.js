// //******************************************************************
// // Game Logic
// //******************************************************************
var MemoryGame = function() {
  this.cards = [
  		{ name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
  		{ name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
      { name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
      { name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
      { name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
  		{ name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
  	];
    this.actualCards=[];
    this.selectedCards = [];
    this.pairsClicked = 0;
    this.correctPairs = 0;
};

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
var pairsGuessed = 0;
var pairsClicked = 0;
var clickAmount = 0;
var roundClicks = 0;

function pairClk(){
  if (clickAmount % 2===0){
    pairsGuessed += 1;
    console.log(clickAmount)
    console.log(pairsGuessed);
  }
  else {
    pairsGuessed = pairsGuessed };
}

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************
var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  shuffle(memoryGame.cards);
  var html = '';

// -----------------------------------------------------
  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');
    // console.log(sanitizedName);
    html += '<div class= "card" id="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="img/' + pic.name + '"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;
// ---------------------------------------------------------------

    $('div.card').on("click", function(){
      memoryGame.actualCards.push($(this).children(".back"));
        clickAmount += 1;
        pairClk();
        var imgUrl = ($(this).children(".front").prop("id"));
        $(this).children(".back").css("background", "url(img/" + imgUrl);
        $(this).addClass("blocked");
        function findCard(superhero){
          return superhero.img === imgUrl;
        };
        var foundCard = memoryGame.cards.find(findCard);
        memoryGame.selectedCards.push(foundCard);
        console.log(memoryGame.selectedCards);

      if (memoryGame.selectedCards.length === 2){
        if (memoryGame.selectedCards[0]=== memoryGame.selectedCards[1]){
          pairsClicked += 1;
          $("#pairs_clicked").html(pairsClicked);
          $(this).addClass("blocked");
          memoryGame.actualCards=[];
          memoryGame.selectedCards = [];
          // console.log(memoryGame.selectedCards);
        } else {
          setTimeout(function(){
            console.log(memoryGame.actualCards[0]);
            console.log(memoryGame.actualCards[1]);
            memoryGame.actualCards[0].css("background", "#456783");
            memoryGame.actualCards[1].css("background", "#456783");
            memoryGame.actualCards=[];
            memoryGame.selectedCards = [];
          }, 1000);
          // memoryGame.selectedCards = [];
        }



      }

      function gameOver(){
        if (pairsClicked === 12) {
alert("Good Job MOFO game is over! Refresh the page to replay!");
        }
      }

        $("#pairs_guessed").html(pairsGuessed);
    });





// add in the if statement if the pairs are not equal change the css back





});
