// case1
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2); // T => string타입, U => number타입


// case2
function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let numV = returnFirstValue([0, 1, 2]);                 // number
let strV = returnFirstValue([1, "hello", "mynameis"]);  // number | string


// case3
function returnFirstValue1<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let strV1 = returnFirstValue1([1, "hello", "mynameis"]); // number


// case4
// 제네릭 타입 T가 length 속성을 가져야함
// => 모든 객체가 length 속성을 가져야함
function getLength<T extends {length: number}>(data: T) {
  return data.length;
}

getLength("123");         // 문자열 "123"은 length 속성을 가지고 있으며, 그 길이는 3
getLength([1, 2, 3]);     // 배열 [1, 2, 3]은 length 속성을 가지고 있으며, 그 길이는 3
getLength({length: 1});   //  이 객체는 length 속성을 가지고 있고, 그 값은 1
// getLength(undefined);  // Error => undefined는 length 속성을 가지고 있지 않음
// getLength(null);       // Error => null은 length 속성을 가지고 있지 않음

