// 타입 좁히기
// 조건문 등을 사용해 넓은 타입에서 좁은 타입으로 좁힘
type Person3 = {
  name: string,
  age: number,
}

function func4(value: number | string | Date | null | Person3) {
  if(typeof value === "number") {
    console.log(value.toFixed());
  } else if(typeof value === "string") {
    console.log(value.toUpperCase());
  } else if(value instanceof Date) {
    console.log(value.getTime());
    // instanceof: 내장 클래스 또는 직접 만든 클래스에만 사용이 가능한 연산
  } else if(value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
    // in 연산자: 직접 만든 타입과 함께 사용할 때 in 연산자 이용
  }
}

