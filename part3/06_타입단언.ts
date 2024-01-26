// 타입 단언
// '값 as 타입'으로 특정 값을 원하는 타입으로 단언
// A as B
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입이어야 한다.
type PersonA = {
  name: string,
  age: number,
}

let person = {} as PersonA;
person.name = "";
person.age = 20;


type DogA = {
  name: string,
  color: string,
}

let dog5: DogA = {
  name: "기름이",
  color: "brown",
  breed: "진도",
} as DogA
// breed 초과 프로퍼티가 존재하지만 DogA 타입으로 단언하여 초과 프로퍼티 검사를 피함


let num3 = 10 as never;    // never은 모든 타입의 서브타입
let num4 = 10 as unknown;  // unknown은 모든 타입의 슈퍼타입
// Error
// let num5 = 10 as string;   // number와 string은 슈퍼-서브 관계가 아님

// 다중 단언
// 왼쪽에서 오른쪽으로 단언
// 별로 권장하지 않는 방식
let num5 = 10 as unknown as string;
// number 타입의 값을 unknown 타입으로 단언 
// unknown 타입의 값을 string 타입으로 단언

// const 단언
// 변수를 const로 선언한 것과 비슷하게 타입이 변경
let num6 = 10 as const; // 10 Number Literal 타입으로 단언

// 모든 프로퍼티가 readonly 갖도록 단언
let cat = {
  name: "야옹이",
  color: "yellow",
} as const;


// Non Null 단언
// '값 as 타입' 형태를 따르지 않는 단언
// 값 뒤에 !를 붙이면 값이 undefined이거나 null이 아니라고 알려줌
type Post = {
  title: string,
  author?: string,
}

let post: Post = {
  title: "게시글1",
}

const len: number = post.author!.length;