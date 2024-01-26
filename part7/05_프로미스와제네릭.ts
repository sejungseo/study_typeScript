/**
 * Promise
 * 제네릭 클래스로 구현되어 있음
 * 새로운 Promise 생성할 때 타입 직접 설정하면 해당 타입이 바로 resolve 결과값의 타입이 됨
 * 제네릭과 Promise를 사용하면 다양한 타입의 값을 비동기적으로 처리하는 함수를 안전하고 유연하게 작성 가능
 */

// 1. 숫자 반환하는 Promise
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);   // 결과값: 20
  }, 3000)
});

promise.then((response) => {
  console.log(response);  // response는 number타입
})

promise.catch((error) => {
  if(typeof error === "string") {
    console.log(error);
  }
})


// 2. 객체 반환하는 Promise
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 본문",
      });
    }, 3000);
  });
}