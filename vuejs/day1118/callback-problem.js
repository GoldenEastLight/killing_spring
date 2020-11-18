// 콜백헬 이해하기
// 1번이 성공하면 2번을 실행하고
// 2번이 성공하면 3번을 실행하고
// 3번이 성공하면 4번을 실행한다.

// 1번 작업
$.ajax({
  url: '1 번 작업 호출',
  success: function () {
    $.ajax({
      url: '2 번 작업 호출',
      success: function () {
        $.ajax({
          url: '3 번 작업 호출',
          success: function () {
            $.ajax({
              url: '4 번 작업 호출',
              success: function () {
                console.log('뿅');
              },
            });
          },
        });
      },
    });
  },
});
