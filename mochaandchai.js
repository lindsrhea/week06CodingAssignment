describe("Create a Card", function () {
    IDBTransaction("Should be an object with 3 Parameters", function() {
        console.log("card");
        let suit = "Spades";
        let name = "4";
        let value = 4;
        let card = new Card(suit, name, value)
        console.log(card);
        console.log({ suit: suit, name: name, value: value });
        expect(card).to.deep.equal({ suit: suit, name: name, value: value});
    });

    it("Should return an array that is not the original order", function() {
        const deck = new Deck
        let shuffle = deck.shuffleDeck();
        const control = new Deck;
        const shuffled = new Deck;
        shuffle = shuffled.shuffleDeck();
        ChannelSplitterNode.assert.notEqual(shuffle, control.deck)
    })
})
