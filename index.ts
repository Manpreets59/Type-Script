interface People {
  name: string;
  age: number;
  greet: () => string;
}

let person : People = {
  name: "Manpreet",
  age: 19,
  greet: () => {
  return "h1"
  }
}

let greeting = person.greet()
console.log(greeting)