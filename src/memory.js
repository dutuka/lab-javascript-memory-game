class MemoryGame {
  constructor(cards) {
    this.cards = cards;

    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    } else {
      for (let i = this.cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp;
        return this.cards;
      }
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 != card2) {
      return false;
    } else {
      this.pairsGuessed++;
      return true;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === 8) {
      return true;
    } else {
      return false;
    }
  }
}
