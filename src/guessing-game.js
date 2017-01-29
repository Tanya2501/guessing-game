class GuessingGame {
    constructor() {
      var result;
      var number;
    }

    setRange(min, max) {
      var min=min;
      var max=max;
var average=guess (min,max);
while(average!==number){
if (number<average){
lower(min, average);
      }
      else if (number>average){
        greater(average, max);
      }
    }
    }

    guess() {
      return (max-min)/2;
    }

    lower() {
setRange(min, average);
    }

    greater() {
setRange(-min, average);
    }
}

module.exports = GuessingGame;
