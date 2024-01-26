// 배열 타입 정의
let numArr: number[] = [1, 2, 3];
let strARr: string[] = ["hello", "im", "sejung"];

// 제네릭
let boolArr: Array<boolean> = [true, false, true];

// 다양한 타입 요소를 갖는 배열
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열
let doubleArr : number[][] = [
  [1, 2, 3],
  [4, 5],
]

// 튜플
// 길이와 타입이 고정된 배열
// 배열 메서드 push나 pop을 이용해 고정된 길이 무시하고 요소 추가 및 삭제 가능
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "hello", true];

tup1.push(1);
tup1.push(1);
tup1.push(1);
tup1.push(1);

// 튜플 사용 예시
const users: [string, number][] = [
  ["광수", 1],
  ["민수", 2],
  ["지수", 3],
  // [4, "혜수"], // 오류 확인
];