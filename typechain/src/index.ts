const name = "Nicolas",
      age = 24,
      gender = "mele";

const sayHi = (name: string, age: number, gender: string) => {
  return `Hello ${name}, you are ${age}, you are a ${gender}!`;
};

console.log(sayHi("Nicolas", 444, "male"));

export {};