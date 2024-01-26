// 타입추론
// 타입이 정의되어 있지 않은 변수의 타입을 자동으로 추론
// 모든 변수에 일일이 타입을 정의하지 않아도 되는 편리함

let s = 10; // number 타입으로 추론

// Error
// 함수의 매개변수 타입은 자동 추론 불가
// 타입 추론이 불가능한 변수에는 암시적으로 any 추론
function func(param) {

}


// 변수 선언
let b = {
  id: 1,
  userName: "승희",
  profile: {
    nickname: "vicky",
  },
  urls: ["https://google.com"],
};
// id, userName, profile, urls 프로퍼티가 있는 객체 타입으로 추론

// 구조 분해 할당
let {id, userName, profile} = b;
let [one, two, three] = [1, "hello", true];

// 함수의 반환값
function func1() {
  return "hello"; // 반환값 string 타입으로 추론
}

// 매개변수의 기본값
function func2(message = "hello") {
  return "hello";
}

// any
let d; // 암시적인 any 타입 추론
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();

// const => 리터럴 타입으로 추론
// 상수는 처음 설정한 값을 변경할 수 없으므로 리터럴
const numA = 10;       // 10 Number Literal 타입으로 추론
const strA = "hello";  // "hello" String Literal 타입으로 추론

// 최적 공통 타입
let arrA = [1, "string"]; // (string | number)[] 타입으로 추론