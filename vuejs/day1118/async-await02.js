/*
https://developer.mozilla.org/ko/docs/Web/javaScript/Reference/Statements/async_function

await 사용 문제
*/
function axios(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('결과 처리 성공하였음');
    }, 2000);
  });
}
console.log('1');
axios('http://localhost:9999/board').then((result) => {
  console.log(result);
});
console.log('2');

let result = await axios('http://localhost:9999/board');
console.log('await 동기처럼 실행한다... 근데 에러 발생??');
