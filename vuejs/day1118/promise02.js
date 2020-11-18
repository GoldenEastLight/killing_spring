/*
    형식: new Promise(Executor)

    Executor : 콜백함수
    Executor 형식
    resolve, reject 둘 다 함수임
    function(resolve, reject) {
        // resolve  - 이행(fulfilled): 연산이 성공적으로 완료됨.
        // reject   - 거부(rejected): 연산이 실패함.
    }

    객체가 생성되면 대기 상태로 들어간다.
    대기(pending): 이행하거나 거부되지 않은 초기 상태.
*/
new Promise(() => {
  console.log('callback 실행');
});
