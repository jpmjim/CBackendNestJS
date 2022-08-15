// type
const myName = 'Max';
const myAge = 27;

console.log(myName, myAge);

// arrow function
const suma = (a: number, b: number) => {
  return a + b;
};
suma(1, 2);

// class
class Persona {
  constructor(private age: number, private name: string) {}

  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const nicolas = new Persona(15, 'nicolas');
nicolas.getSummary();
