// 함수 타입 표현식
type Add = (a: number, b: number) => number;
const addSum: Add = (a, b) => a + b;

type Operation = (a: number, b: number) => number;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;


// 호출 시그니처(Call Signature)
// 함수 타입 표현식과 동일하게 함수의 타입을 별도로 정의하는 방식
type Operation2 = {
  (a: number, b: number): number;
  name: string,
};

const addSum2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

addSum2(1, 2);
addSum2.name;