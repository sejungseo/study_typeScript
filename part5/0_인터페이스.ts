// 인터페이스
// 타입 별칭과 동일하게 타입에 이름을 지어주는 문법

interface Person {
  readonly name: string,
  age?: number,
  // sayHi: () => void;                     // 함수 타입 표현식은
  // sayHi: (a:number, b:number) => void;   // 메서드 오버로딩 구현 불가능
  sayHi(): void;                            // 호출 시그니처는
  sayHi(a: number, b: number): void;        // 메서드 오버로딩 구현 가능
}

const person: Person = {
  name: "다빈",
  // age: 30,
  sayHi() {
    console.log("Hello");
  }
}

// Error
// person.name = "수정";  // readonly

// 하이브리드 타입
interface Func2 {
  (a: number): string,
  b: boolean,
}

const func: Func2 = (a) => "Hello";
func.b = true;

