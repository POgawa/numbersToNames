var scrabbleScore = function(string) {
  var inputArray = string.toLowerCase().split("");
  var onePointScore = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'];
  var twoPointScore = ["d","g"];
  var threePointScore = ['b', 'c', 'm', 'p'];
  var fourPointScore = ['f', 'h', 'v', 'w', 'y'];
  var fivePointScore = ["k"];
  var eightPointScore = ["j","x"];
  var tenPointScore = ["q","z"];
  var totalScore = 0;

  inputArray.forEach(function(letter) {
    for (var i = 0; i <= inputArray.length; i++) { 
      if (letter === onePointScore[i]) {
        totalScore = totalScore + 1;
    };
      if (letter === twoPointScore[i]){
        totalScore = totalScore + 2;
      };
      if (letter === threePointScore[i]){
        totalScore = totalScore + 3;
      };  
      if (letter === fourPointScore[i]){
        totalScore = totalScore + 4;
      };
      if (letter === fivePointScore[i]){
        totalScore = totalScore + 5;
      };
      if (letter === eightPointScore[i]){
        totalScore = totalScore + 8;
      };        
      if (letter === tenPointScore[i]){
        totalScore = totalScore + 10;
      };            
  };
});
  return totalScore;
};

$(document).ready(function(){
  $("form#score-form").submit(function(){
    var input = $("#word").val();
    var totalScore = scrabbleScore(input);

    $(".scrabbleScore").text(totalScore);
      this.reset();

    $(".yourWord").text(input);
    $("div#result").show();

    event.preventDefault();
  });
});
