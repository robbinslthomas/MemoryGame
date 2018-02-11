var row = document.getElementsByClassName('row');
var rows = [...row];
//Finds Thee three Dom elements with a class of "row" and adds them to an array
//this way we can iterate over it later.

var identifiers = ["A", "B", "C", "D","E","F","A", "B", "C", "D","E","F"];
var newSet = [];
//Creating my set of indetifiers for matching the cards

var ran = function(){
   var newSet = identifiers.splice(0);
   console.log(newSet);
   var randomItem = newSet[Math.floor(Math.random()*identifiers.length)];
  return randomItem;
};
//Function which returns a random item from the newSet array of identifiers

  for(var x = 0; x < rows.length; x++){
    console.log("This is a row and I have collected the spaces in this row");
    for(var i = 0; i < 4; i++){
      console.log("This is an element in the row");
      row[x].insertAdjacentHTML('afterbegin','<div class="col-lg-3">   </div>');

    };
  };
//A Loop that first goes over the amount of rows in the page, then a nest loop adding the Cards to those rows.

  var card = document.getElementsByClassName('col-lg-3');
  var cards = [...card];

for (var x of cards){
  var j = ran();
  iden = "<h2>" + j + " </h2>";
  x.innerHTML = iden;
  //var q = newSet.findIndex(set => set === randomItem);
  //delete newSet.q;
}
