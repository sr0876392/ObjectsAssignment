//Adding character experience
const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,
    describe(){
        return `${this.name} has ${this.health} HP, ${this.strength} as strength and ${this.xp} XP points`;
    }
}

//Aurora is harmed by an arrow reduce health by 20
aurora.health -= 20;
//Aurora equips a strenght necklace +10 str
aurora.strength += 10;
//Aurora learns a new skill ("kills an enemy" makes more sense)
aurora.xp += 15;

console.log(aurora.describe());

//Modeling a dog
const dog = {
    name: "Fang",
    species: "boarhound",
    size: 75,
    bark: "Grrr! Grrr!"
}
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark}`);

//Modeling a bank account
const account = {
    name: "Alex",
    balance: 0,
    credit(){
    this.balance += 250;
    this.balance -= 80;
    },
    describe(){
    return (`${this.name}, balance ${this.balance}`)
    }
}
console.log(account.describe());
account.credit();
console.log(account.describe());



