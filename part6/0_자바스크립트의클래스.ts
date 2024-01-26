// 클래스
// 동일한 모양의 객체를 더 쉽게 생성하도록 도와주는 문법

let studentA = {
  name: "수영",
  grade: "A+",
  age: 27,
  study() {
    console.log("열심히 공부함")
  },
  introduce() {
    console.log("안녕하세요")
  }
}


class Student {
  // 필드: 이 클래스가 생성할 객체가 갖는 프로퍼티
  name;
  age;
  grade;

  // 생성자: 실질적으로 객체를 생성하는 함수
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부함");
  }

  introduce() {
    console.log(`안녕하세요 ${this.name}입니다!`)
  }
}

const studentB = new Student("연희", "A+", 27);
studentB.study();
studentB.introduce();
// let studentB = {
//   name: "연희",
//   grade: "A+",
//   age: 27,
//   study() {
//     console.log("열심히 공부함")
//   },
//   introduce() {
//     console.log("안녕하세요")
//   }
// }


// 상속
class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age); // 슈퍼 클래스(확장 대상 클래스)
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}