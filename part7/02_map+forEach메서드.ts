/**
 * Map 메서드
 */

const arr1 = [1, 2, 3];

function map<T, U>(arr: T[], callback: (item: T) => U): U[] {
  let result: U[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr1, (it) => it.toString());
// string[] 타입의 배열 반환
// ["1", "2", "3"]


/**
 * forEach 메서드
 */

const arr2 = [1, 2, 3];

arr2.forEach((it) => console.log(it));
// 1, 2, 3

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for(let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}