// Card game WAR
// Deal 26 cards to each player from Deck of 52 cards
    // 1) Iterate through the turns where each player plays a Card
    // 2) Player who played the higher card is awarded a point
    // 3) Ties result in zero points for both players
    // 4) after all cards have been played, display the score
    // and declare the winner.
    // 5) Use Mocha and Chai for at least one function

// classes: Card, Deck, Player
// Deck: 52 cards
// Card: split to 26
// Player: 2 players


class Card {
    // defines Card Class
    constructor(suit, name, value) {
        this.suit = suit;
        this.name = name;
        this.value = value;
    }
}

class Deck {
    // defines the deck of cards and creates deck with 52 cards.

    constructor() {
        this.cards = [];
        this.suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
        this.names = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
        this.values = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    }

    createDeck() {
        console.log("Create new Deck");
        for (let i = 0; i < this.suits.length; i++) {
        //this loop will iterate through the suits of the cards.

            for (let n = 0; n < this.names.length; n++) {
            // this nested loop will iterate through the Names and Values of the cards.

                this.cards.push(new Card(this.suits[i], this.names[n], this.values[n]))
                // this pushes the card objects to the empty cards array.
            }
        }
    };

    shuffleDeck() {
        console.log("Suffling the Deck");
        const shuffled = [];
        for (let i = 0; i < 52; i++) {
        // I set this for loop to 52 iterations to shuffle the 52 cards.

            let position = Math.floor((this.cards.length - 1) * Math.random());
            // takes the last item of the array and multiply it by a random number

            let item = this.cards.splice(position, 1);
            // Sets the item variable to the spliced object based on the random position

            shuffled.push(...item);
            // Pushes random object into a new empty array - random item
        }

        return shuffled;
    }

    deal(players, shuffledCards) {
    // this method deals the cards to the players

        console.log('Dealing the Cards');
        let dealOne = shuffledCards.splice(0, 26);
        players[0].hands.push(...dealOne);
       // Pushes the first half of the shuffled cards to Player 1

        let dealTwo = shuffledCards.splice(0, 26);
        players[1].hands.push(...dealTwo);
        // pushes the last of the shuffled cards to Player 2
    }
}

class Players {
// creates players for the game

    constructor(name) {
        this.name = name;
        this.points = 0;
        this.hands = [];
    }
}

class Game {
    constructor() {
        this.players = [];
    }

    start() {
    // starts game
        this.players.push(new Players('Lindsey'));
        this.players.push(new Players('Brandon'));
        // creates Players and assigns them names

        console.log('Start Game of War!', this.players);

        let deckTwo = new Deck();
        deckTwo.createDeck();
        let shuffled = deckTwo.shuffleDeck();
        // creates deck and shuffles cards

        deckTwo.deal(this.players, shuffled);
        // deal cards to players

        this.playGame();
        // This game play will run until player is out of cards

        this.endGame();
        // outcome of game and output game results
    }

    playGame() {
        // where game is played

        console.log('Start Game of War!');
        let player1 = this.players[0];
        let player2 = this.players[1];
        let winner = '';
        let turn = 0;
        //runs until one player runs out of cards.
        //Each iteration will compare each players cards

        while(player1.hands.length !== 0 && player2.hands.length !== 0) {
            let player1Card = player1.hands.pop();
            let player2Card = player2.hands.pop();
            if (player1Card.vlaue > player2Card.value) {
                winner = player1.name;
                player1.points += 1;
                console.log("Turn: ", (turn += 1), "\nPlayer 1 card: ", player1Card.name, " of ", player1Card.suit, "\nPlayer 2 card: ", player2Card.name, " of ", player2Card.suit, "\nThe winner is: ", player1.name)
            } else if (player2Card.value > player1Card.value) {
                winner = player2.name;
                player2.points += 1;
                console.log("Turn: ", (turn += 1), "\nPlayer 1 card: ", player1Card.name, " of ", player1Card.suit, "\nPlayer 2 card: ", player2Card.name, " of ", player2Card.suit, "\nThe winner is: ", player2.name)
            } else {
                console.log("Turn: ", (turn += 1), "\nPlayer 1 card: ", player1Card.name, " of ", player1Card.suit, "\nPlayer 2 card: ", player2Card.name, " of ", player2Card.suit, "\nThis round results in a tie!");
            }
        }
    }

    endGame() {
    // runs when the game is over and announces winner
        let matchWinner = '';
        let player1 = this.players[0];
        let player2 = this.players[1];

        if(player1.points > player2.points) {
            matchWinner = player1.name;
            this.gameResultMessage(matchWinner)
        } else if(player2.points > player1.points) {
            matchWinner = player2.name;
            this.gameResultMessage(matchWinner)
        } else {
            this.gameResultMessage(matchWinner)
        }
        // compares points of each player for the winner
    }

    gameResultMessage(matchWinner) {
        if (matchWinner.length > 0) {
            alert(
                `The winner of the game is: ${matchWinner}\n
                Scores:
                ${this.players[0].name} : ${this.players[0].points}
                ${this.players[1].name} : ${this.players[1].points}\n
                Good Game!`
            )
        } else{
            alert(
                `The match resulted in a tie!\n
                Scores:
                ${this.players[0].name} : ${this.players[0].points}
                ${this.players[1].name} : ${this.players[1].points}\n
                Good Game!`
            );
        }
    }
}

let game = new Game();
game.start();
