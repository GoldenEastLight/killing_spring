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

async function callAxios() {
  console.log('1');
  axios('http://localhost:9999/board').then((result) => {
    console.log(result);
  });
  console.log('2');
  try {
    let result = await axios('http://localhost:9999/board');
    console.log('await : ', result);
  } catch (error) {
    console.log('reject 될 경우 실행');
  }
}
console.log('callAxios before');
callAxios();
console.log('callAxios after');
