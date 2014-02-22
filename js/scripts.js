var numbersToNames = function(number) {
  var numbersDictionary =  {"1" : "one", "2":"two", "3" : "three", "4" : "four", "5" : "five", "6": "six", "7" : "seven", "8" : "eight", "9" : "nine"};
  var tenWords = {"2" : "twenty", "3": "thirty", "4" :"fourty", "5" : "fifty", "6": "sixty", "7": "seventy", "8" : "eighty", "9": "ninety"}
  
  var result = "";
  var numberString = number.toString();
  //var numArray = [];

  if (numberString.length === 5 ) {
    for (var x in tenWords) {
      if (numberString[0] === x) {
        result = result + tenWords[x];
      };
    };
    for (var x in numbersDictionary) {
      if (numberString[1] === x) {
        result = result + " " + numbersDictionary[x] + " " + "thousand";
    };
  };
      numberString = numberString.slice(2);
      console.log(numberString);
      console.log(result);
  }; 

  if (numberString.length === 4) {
    for (var x in numbersDictionary) {
      if (numberString[0] === x) {
        result = result + numbersDictionary[x] + " " + "thousand";
      };
    };
      numberString = numberString.slice(1);
     
  } 

  if (numberString.length === 3) {
    for (var x in numbersDictionary) {
      if (numberString[0] === x) {
        result = result + " " + numbersDictionary[x] + " " + "hundred";
      };
    };
    numberString = numberString.slice(1);
  } 

  if (numberString.length === 2 && numberString != "10") {
    var tenMaker = numberString.charAt(0);
      for (var x in tenWords) {
        if (tenMaker[0] === x) { 
          result = result + " "+ tenWords[x];
      for (var x in numbersDictionary) {
      if (numberString[1] === x) {
        result = result + " " + numbersDictionary[x];
        }; 
       };
     };
    };
  };

  if (numberString.length === 1) {       
    for (var x in numbersDictionary) {
    if (numberString[0] === x) {
      result = result + numbersDictionary[x];
      }; 
    };
  };
  return result;
};


$(document).ready(function(){
  $("form#score-form").submit(function(){
    var input = $("#input").val();
    var nummberTo = numbersToNames(input);

    $(".numbername").text(nummberTo);
      this.reset();

    $("div#result").show();

    event.preventDefault();
  });
});

/*if string.length===5 && string.charAt(1) === string.charAt(2){
  return var x + thousand
}
32,222*/
