// Object Constructor //
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Nikko", 33);
console.log(person1);

// Factory Function //
function personFactory(name, age) {
  return {
    name,
    age,
  };
}

// const personFactory = (name, age) => ({ name, age }); // Shortcut fuction

const person2 = personFactory("Alice", 27);
console.log(person2);

const bookFactory = (title, author, pages) => {
  const getInfo = () => console.log(title, author, pages);

  return {
    title,
    author,
    pages,
    getInfo,
  };
};

const book2 = bookFactory("Eloquent JavaScript", "Jon Duckett", "399 pages");
console.log(book2.getInfo());

const name = "Maynard";
const color = "red";
const number = 34;
const food = "rice";

// print together in console log //

console.log({ name, color, number, food });

// Example //
const name = "Nikko";

const printName = (string) => {
  // Start Local Scope
  const nameInsideFuction = string;

  console.log(nameInsideFuction);
}; // End Local Scope

printName("Carlo");
console.log(name);
console.log(nameInsideFuction);

// Another Example //
let a = 17;

const func = (x) => {
  leta = x;
};

func(99);

console.log(a);

// Local Scope
if (a === 17) {
  let b = 12;
}

for (const i = 1; i > 99; i++) {
  let counter = 0;
}

// Closure //

const counter = () => {
  let count = 0; // This is the compartment in the toy box

  return function () {
    count++;
    console.log(count);
  };
};

const myCounter = counter();
myCounter();
myCounter();

// Example //
function greating(name) {
  const message = `Hello, ${name}`;

  return function () {
    console.log(message);
  };
}

const greetNikko = greating("Nikko");
greetNikko();

function createCardItem(item, quantity) {
  let increaseQuantity = () => {
    quantity++;
    console.log(`Increase quantity of ${item} to ${quantity}`);
  };

  let decreaseQuatiy = () => {
    quantity--;
    console.log(`Deccrease quantity of ${item} to ${quantity}`);
  };

  return {
    item,
    quantity,
    increaseQuantity,
    decreaseQuatiy,
  };
}

const cardItem = createCardItem("T-shirt", 2);
cardItem.increaseQuantity();
cardItem.increaseQuantity();

const cardItem2 = createCardItem("Pant", 1);
cardItem2.increaseQuantity();

cardItem.decreaseQuatiy();
cardItem.decreaseQuatiy();
cardItem.decreaseQuatiy();

//const temperature = prompt("waht value do you want to convert")

function createTemperatureConverter() {
  const toCelsius = (fahrenheit) => (fahrenheit - 32) / 1.8;
  const toFahrenheit = (celsius) => celsius * 1.8 + 32;
  return {
    toCelsius,
    toFahrenheit,
  };
}

const temperatureConverter = createTemperatureConverter();
console.log(temperatureConverter.toCelsius(90));
console.log(temperatureConverter.toFahrenheit(32.22222222222222));

function createCounter() {
  let count = 0;

  const increaseCounter = () => {
    count++;
    console.log(count);
  };

  const decreaseCounter = () => {
    count--;
    console.log(count);
  };

  return {
    increaseCounter,
    decreaseCounter,
  };
}

const counter = createCounter();
counter.increaseCounter();
counter.increaseCounter();
counter.decreaseCounter();

// Factory Functioin //
const factoryFunction = (string) => {
  const capitalizeString = () => string.toUpperCase();
  const prinString = () => console.log(`${capitalizeString}`);

  return { prinString };
};

const cookies = factoryFunction("cokies");

// cookies.capitalizeString(); Error

const playerFactory = (name, level) => {
  let health = level * 2;

  const getLevel = () => level;
  const getName = () => name;
  const getHealth = () => health;

  const die = () => console.log(`Player ${name} is dead`);

  const damage = (dmg) => {
    health -= dmg;

    if (health <= 0) {
      die();
    }
  };

  const attack = (enemy) => {
    enemy.damage(level);
    console.log(`${enemy.getName()} has been damaged`);
    console.log(`The enemy's current healt is: ${enemy.getHealth()}`);
  };

  return { getLevel, getName, attack, damage, getHealth };
};

const player = playerFactory("Nikko", 10);
const enemy = playerFactory("Monster", 8);

enemy.attack(player);

//IIFE - Immediately Invoked Function Expression //

const calculator = (() => {
  const add = (a, b) => a + b;
  const minus = (a, b) => a - b;
  const times = (a, b) => a * b;
  const divide = (a, b) => a / b;

  return {
    add,
    minus,
    times,
    divide,
  };
})();

console.log(calculator.add(3, 5));
console.log(calculator.minus(3, 5));
