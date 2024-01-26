// 선언 합침
// 동일한 스코프 내에 중복된 이름으로 선언 가능

// Error
// 타입 별칭은 중복된 이름 선언 불가
// type Person1 = {
//   name: string;
// }

// type Person1 = {
//   age: number;
// }

interface Person1 {
  name: string,
}

interface Person1 {
  // Error => 동일한 이름의 인터페이스에서 동일한 이름의 프로퍼티를 다른 타입으로 정의하면 오류 발생
  // name: number,
  age: number,
}

const person1: Person1 = {
  name: "효주",
  age: 29,
}