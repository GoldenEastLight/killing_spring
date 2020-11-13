export default {
  template: `
  <div>
      <table class="table table-bordered table-condensed">
        <tr>
          <td>이름</td>
          <td>
            <input
              type="text"
              class="form-control"
              id="name"
              ref="name"
              v-model="name"
            />
          </td>
        </tr>
        <tr>
          <td>이메일</td>
          <td>
            <input
              type="text"
              class="form-control"
              id="email"
              ref="email"
              v-model="email"
            />
          </td>
        </tr>
        <tr>
          <td>고용일</td>
          <td>
            <input
              type="text"
              class="form-control"
              id="hiredate"
              ref="hiredate"
              placeholder="연도-월-일"
              v-model="hiredate"
            />
          </td>
        </tr>
        <tr>
          <td>관리자</td>
          <td>
            <input
              type="text"
              class="form-control"
              id="manager"
              ref="manager"
              v-model="manager"
            />
          </td>
        </tr>
        <tr>
          <td>직책</td>
          <td>
            <select
              type="select"
              class="form-control"
              id="job"
              v-model="job"
              ref="job"
            >
              <option value=""></option>
              <option value="사장">사장</option>
              <option value="기획부장">기획부장</option>
              <option value="영업부장">영업부장</option>
              <option value="총무부장">총무부장</option>
              <option value="인사부장">인사부장</option>
              <option value="과장">과장</option>
              <option value="영업대표이사">영업대표이사</option>
              <option value="사원">사원</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>부서</td>
          <td>
            <input
              type="text"
              class="form-control"
              id="dept"
              ref="dept"
              v-model="dept"
            />
          </td>
        </tr>
        <tr>
          <td>월급</td>
          <td>
            <input
              type="text"
              class="form-control"
              id="salary"
              ref="salary"
              v-model="salary"
            />
          </td>
        </tr>
        <tr>
          <td>커미션</td>
          <td>
            <input
              type="text"
              class="form-control"
              id="commission"
              ref="commission"
              v-model="commission"
            />
          </td>
        </tr>
      </table>
      <div class="text-right">
        <button class="btn btn-primary" @click="checkHandler">등록</button>
        <button class="btn btn-primary" @click="moveList">목록</button>
      </div>
      </div>
    `,
  // 폼 화면 입력값과 연관된 데이터 선언하기
  data: function () {
    return {
      name: "",
      email: "",
      hiredate: "",
      manager: "",
      job: "",
      dept: "",
      salary: "",
      commission: "",
    };
  },
  methods: {
    // 입력값 체크하기 - 체크가 성공하면 createHandler 호출
    checkHandler() {
      // 사용자 입력값 체크하기
      // 작성자, 제목, 내용
      // 없을 경우 각 항목에 맞는 메세지를 출력
      let err = true;
      let msg = "";
      !this.name &&
        ((msg = "이름을 입력해주세요"), (err = false), this.$refs.name.focus());
      err &&
        !this.email &&
        ((msg = "이메일을 입력해주세요"),
        (err = false),
        this.$refs.title.focus());
      err &&
        !this.hiredate &&
        ((msg = "고용일을 입력해주세요"),
        (err = false),
        this.$refs.hiredate.focus());
      err &&
        !this.manager &&
        ((msg = "관리자를 입력해주세요"),
        (err = false),
        this.$refs.manager.focus());
      err &&
        !this.job &&
        ((msg = "직책을 입력해주세요"), (err = false), this.$refs.job.focus());
      err &&
        !this.dept &&
        ((msg = "부서를 입력해주세요"), (err = false), this.$refs.dept.focus());
      err &&
        !this.salary &&
        ((msg = "월급을 입력해주세요"),
        (err = false),
        this.$refs.salary.focus());
      err &&
        !this.commission &&
        ((msg = "커미션을 입력해주세요"),
        (err = false),
        this.$refs.commission.focus());

      if (!err) alert(msg);
      // 만약, 내용이 다 입력되어 있다면 createHandler 호출
      else this.createHandler();
    },

    createHandler() {
      // 로컬스토리지에 저장된 데이터 가져오기
      const board = localStorage.getItem("board");
      // 데이터 선언
      let newBoard = {
        sequence: 0,
        items: [],
      };

      // 기존 로컬스토리지에 저장된 내용이 있다면 newBoard 객체를 변경
      if (board) {
        newBoard = JSON.parse(board);
      }

      // 사원아이디 증가
      newBoard.sequence += 1;
      // 화면 입력된 데이터를 newBoard에 추가
      newBoard.items.push({
        id: newBoard.sequence,
        name: this.name,
        email: this.email,
        hiredate: this.hiredate,
        manager: this.manager,
        job: this.job,
        dept: this.dept,
        salary: this.salary,
        commission: this.commission,
      });
      // 로컬스트리지 저장
      localStorage.setItem("board", JSON.stringify(newBoard));
      // 등록 성공 메세지 출력
      alert("등록이 완료되었습니다.");
      // 목록 페이지로 이동하기
      location.href = "./list.html";
    },
    moveList() {
      location.href = "list.html";
    },
  },
};
