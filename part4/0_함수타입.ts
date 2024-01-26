// 함수를 설명하는 가장 좋은 방법
// 어떤 타입의 매개변수를 받고, 어떤 타입의 결과값을 반환하는지 설명
function funcA(a: number, b: number) {
  return a + b;
}

const add = (a: number, b: number) => a + b;

// 선택적 매개변수가 필수 매개변수 앞에 오면 에러 발생
// function introduce1(name = "민수", tall?: number, age: number) {
//   console.log(`name: ${name}`);
//   if(typeof tall === "number") {
//     console.log(`tall: ${tall}`);
//   }
// }
// introduce1("민수", 180);
// introduce1("민수");

// 선택적 매개변수의 타입은 자동으로 undefined와 유니온 타입으로 추론
// tall의 타입 => number | undefined
// 따라서 조건문 사용해 타입 좁히기 필요
function introduce2(name = "민수", age: number, tall?: number) {
  console.log(`name: ${name}`);
  if(typeof tall === "number") {
    console.log(`tall: ${tall}`);
  }
}


// rest 파라미터(나머지 매개변수)
function getSum1(...rest: number[]) {
  let sum = 0;
  rest.forEach(it => sum += it);
  return sum;
}

// 나머지 매개변수의 길이를 고정하고 싶다면 튜플 이용
function getSum2(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach(it => sum += it);
  return sum;
}

getSum2(1, 2, 3);
// getSum2(1, 2, 3, 4); // Error