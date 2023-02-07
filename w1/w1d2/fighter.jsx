class Fighter {
    constructor(name, health, strength) {
        //name, health, speed, strength
        this.name = name;
        this.health = 0;
        this.speed = speed;
        this.strength = strength;
    }
    punch(){
        this.speed -= 1;
        this.strength -= 2;
        console.log("Rawwrrrr")
        return this;
    }
    
    duck(){
        this.health += 10;
        this.speed -= 1;
        this.strength -= 2;
        console.log("I'm ducking!!")
        return this;
    }
    
    showStats(){
        console.log(`The fighter ${this.name} stats are: \nHealth: ${this.health}\nSpeed: ${this.speed}\nStrength: ${this.strength}`)
        return this;
    };
}

const kimbo = new Fighter("Kimbo Slice", 100, 50, 25)
const theRock = new Fighter("The Rock", 100, 50, 25)

// kimbo.showStats()
// console.log("--------------------------------------------")
// theRock.showStats()

// console.log("--------------------------------------------")
// kimbo.punch().punch().punch().punch();
// kimbo.showStats()
// console.log("--------------------------------------------")
// kimbo.duck().duck().duck().duck()
// kimbo.showStats()
// console.log("--------------------------------------------")

module.exports = Fighter;