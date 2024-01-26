// any 타입
// 타입 검사를 받지 않아 다른 타입으로 재할당 가능
// 타입 검사가 제대로 이루어지지 않아 위험한 코드 생산 우려가 있기 때문에 최대한 사용 자제
let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;


// unknown 타입
// any 타입과 비슷하지만 보다 안전
// unknown 타입에 모든 타입의 값 할당 가능
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// 다른 타입의 변수에 unknown 타입의 값 할당 불가능
let num: number = 10;
// Error
// num = unknownVar; 

// 연산, 메서드 사용 불가
// Error
// unknownVar * 2