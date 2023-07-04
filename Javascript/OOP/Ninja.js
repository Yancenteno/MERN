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

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName().showStats().drinkSake().showStats();



