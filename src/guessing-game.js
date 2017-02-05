class GuessingGame {
    constructor()
      {
       this.left = 0;
       this.right = 0;
      }

    setRange(min, max) {
      this.left = min;
      this.right = max;
    }

    guess() {
      return Math.ceil(this.left + (this.right - this.left)/2);
    }

    lower() {
      this.right = Math.ceil(this.left + (this.right - this.left)/2);
    }

    greater() {
      this.left = Math.ceil(this.left + (this.right - this.left)/2);
    }
  }
module.exports = GuessingGame;
