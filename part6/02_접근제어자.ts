// 접근 제어자
// 클래스의 특정 필드나 메서드를 접근할 수 있는 범위 설정
// public: 모든 범위에서 접근 가능
// private: 클래스 내부에서만 접근 가능
// protected: 클래스 내부 또는 파생 클래스 내부에서만 접근 가능

class Employee1 {
  // 필드
  // name: string;       // 자동으로 public
  // age: number;        // 자동으로 public
  // position: string;   // 자동으로 public
  
  // private name: string;
  // protected age: number;
  // public position: string;

  // // 생성자
  // constructor(name: string, age: number, position: string) {
  //   this.name = name;
  //   this.age = age;
  //   this.position = position;
  // }

  // ------------------------------------------------------
  // 필드 생략하기 => 생성자에 접근 제어자 설정하면 필드 선언 불가

  // 생성자
  // 생성자 매개변수에 접근 제어자 설정하면 자동으로 필드도 함께 선언
  // 접근 제어자가 설정된 매개변수들은 `this.필드 = 매개변수`가 자동으로 수행
  // => 생성자 내부 코드 제거 가능
  constructor(
    private name: string, 
    protected age: number, 
    public position: string
  ) {} // 생성자 내부 코드 제거

  // 메서드
  work() {
    console.log(`${this.name}이 일함`); // private name에 접근 가능
  }
}

class ExecutiveOfficer1 extends Employee1 {
  // 메서드
  func() {
    //this.name; // Error
    this.age;    // protected age 접근 가능
  }
}

const employee = new Employee1("수영", 27, "developer");

// employee.name = "영수";  // private name에 접근 불가능
// employee.age = 30;        // protected age에 접근 불가능
employee.position = "designer";