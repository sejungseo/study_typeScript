// unknown(전체집합)
// 타입 계층도의 최상단에 위치
// unknown 타입 변수에는 모든 타입의 값 할당 가능
// => 모든 타입은 unknown 타입으로 업캐스트 가능

{
  let a: unknown = 1;           // number -> unknown
  let b: unknown = "hello";     // string -> unknown
  let c: unknown = true;        // boolean -> unknown
  let d: unknown = null;        // null -> unknown
  let e: unknown = undefined;   // undefined -> unknown
  let f: unknown = [];          // Array -> unknown
  let g: unknown = {};          // Object -> unknown
  let h: unknown = () => {};    // Function -> unknown

  let unknownValue: unknown;
}
// Error
// let i: number = unknownValue;
// unknown 타입은 any 제외 어떤 타입의 변수에도 할당 불가능


// never(공집합)
// 아무 것도 포함하지 않음
// 모든 집합의 부분 집합 => 모든 타입의 서브타입

function errorFunc(): never {
  throw new Error();
}

// never 타입은 모든 타입으로 업캐스팅 가능
// 이론적으로 never 타입은 모든 타입의 서브 타입이지만
// 실제로는 never 타입의 변수에 값을 할당하거나, never 타입의 변수를 다른 타입의 변수에 할당하는 것은 불가능
// never 타입이 실제로 값이 존재하지 않는 상태를 나타내기 때문
let neverVar: never;

{
  /**
  let a: number = neverVar;            // never -> number
  let b: string = neverVar;            // never -> string
  let c: boolean = neverVar;           // never -> boolean
  let d: null = neverVar;              // never -> null
  let e: undefined = neverVar;         // never -> undefined
  let f: [] = neverVar;                // never -> Array
  let g: {} = neverVar;                // never -> Object
   */
}

// 그 어떤 타입도 never 타입으로 다운캐스팅 불가능
{
  /**
  let a: never = 1;                 // number -> never ❌
  let b: never = "hello";           // string -> never ❌
  let c: never = true;              // boolean -> never ❌
  let d: never = null;              // null -> never ❌
  let e: never = undefined;         // undefined -> never ❌
  let f: never = [];                // Array -> never ❌
  let g: never = {};                // Object -> never ❌
   */
}


// void 타입
// 반환값 없음
// undefined 타입의 슈퍼타입

function noReturnFuncA(): void {
  return undefined;
}

function noReturnFuncB(): void {
  return;
}

function noReturnFuncC(): void {}

let voidVar: void;
voidVar = undefined; // undefined -> void (ok)

// voidVar = neverVar; // never -> void (ok)


// any 타입
// 사실상 타입 계층도 완전 무시
// 모든 타입의 슈퍼타입이 될 수도 있고,
// 모든 타입의 서브 타입이 될 수도 있음
let anyValue: any;

let num: number = anyValue;   // any -> number (다운 캐스트)
let str: string = anyValue;   // any -> string (다운 캐스트)
let bool: boolean = anyValue; // any -> boolean (다운 캐스트)

anyValue = num;  // number -> any (업 캐스트)
anyValue = str;  // string -> any (업 캐스트)
anyValue = bool; // boolean -> any (업 캐스트)