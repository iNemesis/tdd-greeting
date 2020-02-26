var assert = require("assert");
var x = require('../main/index');

describe('greet', function () {
    it('should say hello', function () {
        assert.equal(x.greeter("Bob"), "Hello, Bob!")
        assert.equal(x.greeter("Rick"), "Hello, Rick!")
    });
    
    it('should handle null values', function () {
        assert.equal(x.greeter(null), "Hello!")
    });
   
   it('should say hello in uppercase', function () {
        assert.equal(x.greeter("BOB"), "HELLO, BOB!")
        assert.equal(x.greeter("RICK"), "HELLO, RICK!")
    });

    it('should say hello to 2 people', function () {
        assert.equal(x.greeter(["Bob", "Bobby"]), "Hello, Bob and Bobby!")
        assert.equal(x.greeter(["Jean", "Karim"]), "Hello, Jean and Karim!")
    });

    it('should say hello to people', function () {
        assert.equal(x.greeter(["Bob", "Bobby", "Bibbo"]), "Hello, Bob, Bobby, and Bibbo!")
    });

    it('should say hello to people and shout to uppercase names', function () {
        assert.equal(x.greeter(["BOB", "Bobby", "Bibbo"]), "Hello, Bobby and Bibbo. AND HELLO BOB!")
        assert.equal(x.greeter(["BOBBY", "RICK", "Bibbo"]), "Hello, Bibbo. AND HELLO BOBBY, RICK!")
    });

    it('should understand commas in string as array', function() {
        assert.equal(x.greeter(["Bobby, Bibbo, Bob", "Léon"]), "Hello, Bobby, Bibbo, Bob, and Léon!")
    })

    it('should understand escape quotes', function() {
        assert.equal(x.greeter(["Léon", "\"Bobby, Bibbo, Bob\""]), "Hello, Léon and Bobby, Bibbo, Bob!")
    })
 });