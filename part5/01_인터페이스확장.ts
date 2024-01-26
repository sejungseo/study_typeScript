// 인터페이스 확장
// 하나의 인터페이스를 다른 인터페이스들이 상속받아 중복된 프로퍼티를 정의하지 않도록 도와주는 문법

interface Animal { // 슈퍼타입
  name: string,
  color: string,
}

// 코드의 중복
// interface Dog {
//   name: string,
//   age: number,
//   isBark: boolean,
// }

// interface Cat {
//   name: string,
//   age: number,
//   isScratch: boolean,
// }

// interface Chicken {
//   name: string,
//   age: number,
//   isFly: boolean,
// }

// 인터페이스 확장
// interface 타입이름 extends 확장할타입이름
// 인터페이스는 인터페이스 뿐만 아니라 타입 별칭으로 정의된 객체도 확장 가능
interface Dog extends Animal {        
  //name: "멍멍이", // 타입 재 정의
  breed: string,
}

interface Cat extends Animal {
  isScratch: boolean,
}

interface Chicken extends Animal {
  isFly: boolean,
}

const dog:Dog = {
  name: "멍멍이",
  color: "brown",
  breed: "진도"
}

// 다중 확장
// 여러 개의 인터페이스 확장 가능
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  breed: "",
  isScratch: true,
}