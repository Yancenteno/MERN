class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    showUnit() {
        console.log(`Name: ${this.name} | Cost: ${this.cost} | Power: ${this.power} | Resilience: ${this.res}`);
    }
    attack(target) {
        if (target instanceof Unit) {
            target.res -= this.power;
            console.log(`Enemies Resilience: ${target.res}`);
        } else {
            throw new Error("Target must be a unit");
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    showEffect() {
        console.log(`Name: ${this.name} | Cost: ${this.cost} | Text: ${this.text} | Stat: ${this.stat} | Magnitude: ${this.magnitude}`)
    }
    play(target) {
        if (target instanceof Unit) {
            if (this.stat === "resilience") {
                target.res += this.magnitude;
                console.log(`${target.name} resilience is now ${target.res}`)
            } else if (this.stat === "power") {
                target.power += this.magnitude;
                console.log(`${target.name} power has increased to ${target.power}`)
            } else {
                throw new Error("Move invalid!")
            }
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

//Units
const red_ninja = new Unit("Red Belt Ninja", 3, 3, 4);

const black_ninja = new Unit("Black Belt Ninja", 4, 5, 4);

//Effects
const hard_algorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", +3);

const rejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);

const pair = new Effect("Pair Programming", 3, "increase target's power by 2", "power", +2);

//Scenario
console.log("----------------------(Turn 1)------------------------------------")
red_ninja.showUnit();
hard_algorithm.play(red_ninja);
console.log("----------------------(Turn 2)------------------------------------")
black_ninja.showUnit();
rejection.play(red_ninja);
console.log("----------------------(Turn 3)------------------------------------")
pair.play(red_ninja);
red_ninja.attack(black_ninja);
console.log("----------------------(Game Over)------------------------------------")
console.log(red_ninja.name + " wins!")