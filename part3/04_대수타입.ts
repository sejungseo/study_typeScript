// 대수타입: 여러 개의 타입을 합성해서 만드는 타입
// 합집합 타입(Union 타입), 교집합 타입(Intersection 타입)

// 합집합 타입(Union 타입)
// 원시타입
let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

// 배열
let arr: (number | string | boolean)[] = [1, "hello", true];

// 객체
type Cat = {
  name: string,
  color: string,
}

type Person = {
  name: string,
  language: string,
}

type Union1 = Cat | Person;

let union1: Union1 = {
  name: "",
  color: "",
}

let union2: Union1 = {
  name: "",
  language: "",
}

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
}

// Error
// Cat이나 Person 두 타입 중 어느 것도 충족시키지 못함
/**
  let union4: Union1 = { 
    name: "",
  };
 */


// 교집합 타입(Intersection 타입)
let variable: number & string; // 교집합을 공유하지 않는 서로소 집합이므로 never

type Dog2 = {
  name: string,
  color: string,
}

type Person2 = {
  name: string,
  language: string,
}

type Intersection = Dog2 & Person2;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
}