/**
 * 사용자 정의 타입 가드
 * 참 또는 거짓을 반환하는 함수를 이용해 타입 가드 생성
 */

type DogFunc = {
  name: string,
  isBark: boolean,
}

type CatFunc = {
  name: string,
  isScratch: boolean,
}

type AnimalFunc = DogFunc | CatFunc;

// DogFunc 타입인지 확인하는 타입 가드
function isDog(animal: AnimalFunc): animal is DogFunc {
  return (animal as DogFunc).isBark !== undefined;
}

// CatFunc 타입인지 확인하는 타입 가드
function isCat(animal: AnimalFunc): animal is CatFunc {
  return (animal as CatFunc).isScratch !== undefined;
}

// function warning(animal: AnimalFunc) {
//   if("isBark" in animal) {
//     console.log(animal.isBark ? "짖습니다" : "안 짖어요");
//   } else if("isScratch" in animal) {
//     console.log(animal.isScratch ? "할큅니다" : "안 할퀴어요");
//   }
// }

function warning(animal: AnimalFunc) {
  if(isDog(animal)) {
    console.log(animal.isBark ? "짖습니다" : "안 짖어요");
  } else {
    console.log(animal.isScratch ? "할큅니다" : "안 할퀴어요");
  }
}