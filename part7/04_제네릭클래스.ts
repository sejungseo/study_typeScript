/**
 * 제네릭 클래스
 */

// 기본 클래스
// 클래스에 추가 및 수정이 필요한 경우 비효율적
class NumberList {
  constructor(private list: number[]) {}

  push(data: number) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

class StringList {
  constructor(private list: string[]) {}

  push(data: string) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new Number([1, 2, 3]);
const stringList = new StringList(["1", "2", "3"]);


// 제네릭 클래스
class List<T> {
  constructor(private list:T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList2 = new List([1, 2, 3]);                 // 변수 타입 추론
const stringList2 = new List(["1", "2", "3"]);           // 변수 타입 추론
const numberList3 = new List<number>([1, 2, 3]);         // 변수 타입 직접 설정
const stringList3 = new List<string>(["1", "2", "3"]);   // 변수 타입 직접 설정
