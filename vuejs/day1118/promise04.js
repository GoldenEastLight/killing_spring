/*

*/
//           성공,     실패
new Promise((resolve, reject) => {
  console.log('callback 실행');
  setTimeout(() => {
    /*
    console.log('결과성공');
    resolve();
    */
    console.log('결과성공');
    reject();
  }, 2000);
});
