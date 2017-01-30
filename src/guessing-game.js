class GuessingGame {
    constructor() {
      this.number=null;
      this.min=null;
      this.max=null;
    }

    setRange(min, max) {
this.min=min;
this.max=max;
    }
  
    guess() {
      return Math.round(this.max-this.min)/2;
    }

    lower() {
  return this.max=(this.max-this.min)/2-1;
    }

    greater() {
 
 return this.min=-this.min;
    }
}

module.exports = GuessingGame;
