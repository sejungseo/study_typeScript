class Employee {
  // 필드
  name: string = "";
  age: number = 0;
  position?: string = ""; // 선택적 프로퍼티

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

// 클래스를 타입으로 사용
const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
}

// 상속
class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor (
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}