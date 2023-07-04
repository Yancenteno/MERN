class Ninja {
    constructor(name, health = 90) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`Name is ${this.name}`);
        return this;
    }
    showStats() {
        console.log(`Name: ${this.name} | Strength: ${this.strength} | Speed: ${this.speed} | Health: ${this.health}`);
        return this
    }
    drinkSake() {
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja {
    constructor(name, health = 200) {
        super(name);
        this.health = health;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months")
        return this
    }
}

const sensei = new Sensei("Master Splinter")

sensei.showStats().speakWisdom().showStats();