/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  key: K,
  value: V,
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
}

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
}

// 제네릭 인터페이스를 인덱스 시그니처와 함께 사용하면
// 기존보다 훨씬 유연한 객체 타입으로 정의됨
interface Map1<V> {
  [key: string]: V;
}

let stringMap: Map1<string> = {
  key: "value",
};

let booleanMap: Map1<boolean> = {
  key: true,
}


/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
}

let stringMap2: Map2<string> = {
  key: "string",
}


// 제네릭 인터페이스 활용 예시
interface Student {
  type: "student",
  school: string,
}

interface Developer {
  type: "developer",
  skill: string,
}

interface User {
  name: string,
  profile: Student | Developer;
}

function goToSchool(user: User) {
  if(user.profile.type !== "student") {
    console.log("잘 못 오셨습니다.");
    return;
  }

  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User = {
  name: "규민",
  profile: {
    type: "developer",
    skill: "typescript",
  }
}

const studentUser: User = {
  name: "민규",
  profile: {
    type: "student",
    school: "서울대학교",
  }
}

goToSchool(studentUser);

// 제네릭 인터페이스로 업그레이드
interface User2<T> {
  name: string,
  profile: T,
}

function goToSchool2(user: User2<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser2: User2<Developer> = {
  name: "지민",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
}

const studentUser2: User2<Student> = {
  name: "민지",
  profile: {
    type: "student",
    school: "서울대학교",
  },
}

goToSchool2(studentUser2);