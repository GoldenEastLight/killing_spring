const promise = new Promise((resolve, reject) => {
  // 비동기 작업 발생
  // 성공
  // resolve();
  // 실패
  resolve();
});
promise
  .then(() => {
    console.log('성공 처리 작업');
  })
  .catch(() => {
    console.log('결과 처리 작업');
  });
