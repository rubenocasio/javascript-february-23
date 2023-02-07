const Fighter = require('./fighter.jsx')

class JudoMaster extends Fighter{
    constructor(name, scared){
        //Fighter class
        super(name, 50, 50, 50)
        this.scared = scared
    }

    flip(){
        super.duck();
        this.health += 10
        console.log("I'm flipping out")
        return this;
    }
}

const Nima = new JudoMaster("Nima bazofti")

Nima.showStats()
Nima.flip()
console.log("--------------------------------------------");

Nima.showStats()
