
class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(`The ${this.species} says: ${this.sound}`);
  }
}

// Dog extends Animal

class Dog extends Animal {
  constructor(species, sound, color) {
    super(species, sound);
    this.color = color;
  }


  makeSound() {
    console.log(`The ${this.color} dog says: ${this.sound}`);
  }
}


const myDog = new Dog('Dog', 'Woof', 'Brown');


myDog.makeSound();
