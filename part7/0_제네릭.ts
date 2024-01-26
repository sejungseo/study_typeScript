/**
 * 제네릭
 * 함수나 인터페이스, 타입 별칭, 클래스 등 다양한 타입과 함께 동작하도록 만들어줌
 * 모든 타입의 값을 다 적용할 수 있는 그런 범용적인 함수
 */

// any
function func(value: any) {
  return value;
}

let num = func(10);         // any
let str = func("string");   // any

num.toUpperCase(); // any


// unknown
function func1(value: unknown) {
  return value;
}

let num1 = func1(10);         // unknown
let str1 = func1("string");   // unknown

// num1.toUpperCase(); // Error
// num1.toFixed();     // Error
if(typeof num1 === "number") {
  num1.toFixed();
}


// 제네릭 함수
// 모든 타입의 값을 다 적용할 수 있는 범용적인 함수
// 타입 변수 T => 함수가 호출될 때 T의 타입 결정
function func2<T>(value: T): T {
  return value;
}

let num2 = func2(10); // number
let arr = func2<[number, number, number]>([1, 2, 3]); // 타입 직접 명시 가능
// 코드의 흐름
// 1. T에 [number, number, number] 튜플 타입 할당
// 2. 매개변수 value와 반환값 타입이 모두 튜플 타입이 됨
