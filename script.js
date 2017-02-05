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

var newNotes = notes.map(function(value) {
  return value*2
})

var ways = function(amount_left, newNotes) {
  amount = amount_left * 2
  var temp = new Array(amount + 1).fill(0);
  temp[0] = 1;
  for(i = 0; i < newNotes.length; i++){
      for(j = 1; j <= amount ; j++){
          if(j >= newNotes[i]){
              temp[j] += temp[j - newNotes[i]];
          }
      }
  }
  return temp[amount];
}
var numberOfWays = ways(amount_left, newNotes);

notes.forEach(function(value, key) {
  var result = getNofSpecificNote(amount_left, value);
  if(result.quotient) {
    output += result.quotient + "som: " + value + '\n';
  }
})
output = output + "berishin kerek" + "\n" + numberOfWays + " jol menen berse bolot."
console.log(output);
alert(output);
