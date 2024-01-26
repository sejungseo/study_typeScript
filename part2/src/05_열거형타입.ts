// 열거형(Enum) 타입
// 오직 타입스크립트에서만 사용
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

{
    enum Role {
    ADMIN, // 자동으로 0 할당
    USER, // 자동으로 1 할당
    GUEST, // 자동으로 2 할당
  }

  const user1 = {
    name: "민정",
    role: Role.ADMIN, // 관리자(0)
  }

  const user2 = {
    name: "수민",
    role: Role.USER, // 회원(1)
  }

  const user3 = {
    name: "선희",
    role: Role.GUEST, // 게스트(2)
  }
}

// 숫자 열거형
    enum Role {
    ADMIN = 10, //10 할당
    USER, // 자동으로 11 할당
    GUEST, // 자동으로 12 할당
  }

  const user1 = {
    name: "민정",
    role: Role.ADMIN, // 관리자(10)
  }

  const user2 = {
    name: "수민",
    role: Role.USER, // 회원(11)
  }

  const user3 = {
    name: "선희",
    role: Role.GUEST, // 게스트(12)
  }

// 문자열 열거형
enum Language {
  korean = "ko",
  english = "en",
}

const user4 = {
  name: "영희",
  role: Role.ADMIN, // 10
  language: Language.korean, // "ko"
}

// enum은 컴파일될 때 자바스크립트 객체로 변환
// tsc로 chapter5_열거형 타입.ts를 컴파일하고 결과를 보면 JS 객체로 변환된 것 확인 가능