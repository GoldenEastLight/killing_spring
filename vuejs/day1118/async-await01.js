/*
https://developer.mozilla.org/ko/docs/Web/javaScript/Reference/Statements/async_function

async는 항상 Promise 객체를 반환한다.
await가 없다면 항상 동기적 실행
*/
async function func01() {
  return 1;
}
console.log('func01 call');
console.dir(func01());

async function func02() {
  return new Promise((resolve) => {
    resolve(1);
  });
}
console.log('func02 call');
console.dir(func02());
