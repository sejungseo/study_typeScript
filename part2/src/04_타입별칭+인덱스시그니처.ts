// 타입 별칭(Type Alias)
type User = {
  id: number,
  name: string,
  nickname: string,
  birth: string,
  bio: string,
  location: string,
}
// 동일한 스코프에 동일한 이름의 타입 별칭 선언 불가
// type User = {}

let user: User = {
  id: 1,
  name: "혜수",
  nickname: "vicky",
  birth: "1990.01.23",
  bio: "안녕하세요",
  location: "서울시",
};


// 인덱스 시그니처
// 객체 타입을 유연하게 정의할 수 있도록 돕는 특수한 문법
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  // (...)
  Brazil: "bz",
}

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // 반드시 포함해야 하는 프로퍼티는 직접 명시
  
  // Error
  // Korea: string; 
  // 인덱스 시그니처의 value 타입과 직접 추가한 프로퍼티의 value 타입이 일치해야 함
};