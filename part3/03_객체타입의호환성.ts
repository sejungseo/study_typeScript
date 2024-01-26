// 슈퍼타입
type Animal = {
  name: string,
  color: string,
};

// 서브타입
type Dog = {
  name: string,
  color: string,
  breed: string,
};

let animal: Animal = {
  name: "푸바오",
  color: "black"
};

let dog: Dog = {
  name: "뭉치",
  color: "brown",
  breed: "시츄",
};

// 업캐스팅 OK
animal = dog;

// 다운캐스팅 Error
// dog = animal;

// Dog에 타입에 포함된다면 무조건 Animal 타입에도 포함 => Animal은 Dog의 슈퍼타입

// 초과 프로퍼티 검사
// 타입에 정의된 프로퍼티 외의 다른 초과된 프로퍼티 갖는 객체를 변수에 할당할 때 발생
let dog2: Animal = {
  name: "쿠키",
  color: "black",
  //breed: "불독" // Error
}

// 값을 별도의 다른 변수에 보관한 다음 변수 값을 초기화 값으로 사용하면 발생하지 않음
let dog3: Animal = dog;