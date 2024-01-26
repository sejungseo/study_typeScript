// object로 정의하기
// object는 단순히 어떤 값이 객체라는 것만을 나타내고, 그 객체가 구체적으로 어떤 속성을 가지고 있는지에 대해서는 전혀 알려주지 않음
let user1: object = { 
  id: 1,
  name: "민수",
}
// Error
// user1.id; 

// 객체 리터럴 타입
let user: {
  id?: number,
  name: string,
} = {
  id: 1,
  name: "민수",
};
user.id;

let dog: {
  name: string,
  color: string,
} = {
  name: "뭉치",
  color: "white",
}

// 선택적 프로퍼티 & 읽기전용 프로퍼티
let userA: {
  id?: number, // 선택적 프로퍼티가 된 id
  readonly name: string, // name 프로퍼티의 수정 방지
} = {
  id: 1,
  name: "민수",
};

userA = {
  name: "철수"
}

// Error
// userA.name = "경수";