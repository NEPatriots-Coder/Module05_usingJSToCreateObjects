// 1. Creating a literal object named myDog

const myDog = {
        name: "Brian Griffin",
        breed: "Labrador Retriever",
        gender: "Male",
        color: "White",
        owner: "Stewie Griffin",
        age: 42,
        mySound: "I'm a pseudo-intellectual with a degree in Theater from Brown University."
};

// Displaying the literal object
console.log("Literal Object: ", myDog);

// 2. Creating a constructor function for similar dog objects

function Dog(name, breed, gender, color, owner, age, mySound) {
        this.name = name;
        this.breed = breed;
        this.gender = gender;
        this.color = color;
        this.owner = owner;
        this.age = age;
        this.mySound = mySound;
}

// 3. Adding a method to the Dog constructor's prototype

Dog.prototype.describe = function () {
        return `My name is ${this.name}. I am a ${this.age} year old ${this.breed} owned by ${this.owner}. ${this.mySound}`;
};

// 4. Creating a new dog object using the constructor
const lamarsDog = new Dog(
    "Benny Schmooples",
    "Jack-A-Zhu",
    "Male",
    "White with Dark Brown fur",
    "Lamar",
    3,
    "I like to eat, sleep, and constantly bark at the neighbor's dogs."
);

// 5. Displaying the values by using the describe method
console.log("Lamar's Dog: ", lamarsDog);
console.log("Description: ", lamarsDog.describe());

// 6. Displaying the values of the literal dog object myDog using the describe method
myDog.describe = function() {
        return `My name is ${this.name}. I am a ${this.age} year old ${this.breed} owned by ${this.owner}. ${this.mySound}`;
};

console.log("Description of myDog: ", myDog.describe());

