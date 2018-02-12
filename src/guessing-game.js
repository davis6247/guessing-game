
class GuessingGame {
    
    constructor() {
        this.guessedNumber = 0;
        this.min = 0;
        this.max = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.guessedNumber  = Math.ceil(((this.max - this.min) / 2) + this.min);;
    }

    lower() {
        this.max = this.guessedNumber;
    }

    greater() {
        this.min = this.guessedNumber;
    }
}

module.exports = GuessingGame;
