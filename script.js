const notes = [5000, 1000, 500, 200, 100, 50,
               20, 10, 5, 3, 2, 1, 0.5];

var amount_due = prompt("Kancha toloshu kerek:");
var amount_taken = prompt("Kancha akcha berdi:");
var amount_left = amount_taken - amount_due > 0 ? amount_taken - amount_due : 0;
var output = "";


var getNofSpecificNote = function(amount, note){
  amount_left = amount%note;
  return {
    remainder: amount_left,
    quotient: Math.floor(amount/note)
  };
}

notes.forEach(function(value, key) {
  var result = getNofSpecificNote(amount_left, value);
  if(result.quotient) {
    output += result.quotient + " " + value + '\n';
  }
})
console.log(output + "berishin kerek");

var newNotes = notes.map(function(value) {
  return value*2
})

console.log(newNotes)
