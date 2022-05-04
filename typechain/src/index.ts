//타입스크립트는 개발자가 실수하지 않도록 보호해준다. 
//타입스크립트가 에러가 발생할 것 같은 코드를 감지하면 자바스크립트로 아예 컴파일 되지 않는다.

// const name = "Nicolas",
//       age = 24,
//       gender = "mele";


// class Human {
//   public name: string;
//   public age: number;
//   public gender: string;
//   constructor(name: string, age: number, gender: string){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }

// const lynn = new Human("Lynn", 18, "female");

// const sayHi = (person: Human): string=> {
//   return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
// };

// console.log(sayHi(lynn));

type Player = {
    name:string,
    age?:number
}

const nico : Player = {
    name:"nico"
}
const lynn : Player = {
  name:"lynn",
  age:12
}

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}
const genesisBlock: Block = new Block(0, "2020202020202020", "", "Hello", 123456)

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);



export {};