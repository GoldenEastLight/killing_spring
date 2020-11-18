/*
    resolve 함수 호출 시 then 실행
    reject 함수 호출 시 catch 실행
*/
//           성공,     실패
const promise = new Promise((resolve, reject) => {
  console.log('callback 실행 start');
  setTimeout(() => {
    // resolve(); // then 호출
    reject(); // catch 호출
  }, 2000);
  console.log('callback 실행 end');
});
// then(callback function)
promise
  .then(() => {
    console.log('결과성공');
  })
  .catch(() => {
    console.log('결과실패');
  });
