/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라
 * 여러가지 버전으로 만드는 문법
 * -> 하나의 함수 func
 * -> 모든 매개변수는 number 타입
 * -> ver1. 매개변수 1개 => 매개변수에 20 곱한 값 출력
 * -> ver2. 매개변수 3개 => 모든 매개변수를 더한 값 출력
 */

// 오버로드 시그니처
// 구현부 없이 선언부만 만들어둔 함수
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 구현 시그니처 (실제 구현부)
function func(a: number, b?: number, c?: number) {
  if(typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(1);        // ver1 - 오버로드 시그니처
// func(1, 2);  // ❌
func(1, 2, 3)   // ver2 - 오버로드 시그니처