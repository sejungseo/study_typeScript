// void 타입
// 어떤 타입도 존재할 수 없음

// 함수에서 반환 값이 없을 때
function func1(): void {
  console.log("hello");
}

// void 타입의 변수에는 null 또는undefined 외 다른 타입 할당 불가
let a: void;
a = undefined;
a = null;


// never 타입
// 함수가 값을 반환할 수 없을 때 해당 함수의 반환값 타입
function func2(): never {
  while(true) {} // 무한 루프 => 종료될 수 없기 때문에 반환 불가능
}

function func3(): never {
  throw new Error(); // 의도적으로 오류 발생시키는 함수
}

// 변수 타입을 never로 정의하면 any 포함 모든 타입의 값 할당 불가능
let anyVar: any;
let b: never;

// Error
// b = 1;
// b = null;
// b = undefined;
// b = anyVar;