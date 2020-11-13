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
              id="mailid"
              ref="mailid"
              v-model="mailid"
            />
          </td>
        </tr>
        <tr>
          <td>고용일</td>
          <td>
            <input
              type="text"
              class="form-control"
              id="start_date"
              ref="start_date"
              placeholder="연도-월-일"
              v-model="start_date"
            />
          </td>
        </tr>
        <tr>
          <td>관리자</td>
          <td>
            <input
              type="text"
              class="form-control"
              id="manager_id"
              ref="manager_id"
              v-model="manager_id"
            />
          </td>
        </tr>
        <tr>
          <td>직책</td>
          <td>
            <select
              type="select"
              class="form-control"
              id="title"
              v-model="title"
              ref="title"
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
              id="dept_id"
              ref="dept_id"
              v-model="dept_id"
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
              id="commission_pct"
              ref="commission_pct"
              v-model="commission_pct"
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
      name: '',
      mailid: '',
      start_date: '',
      manager_id: '',
      title: '',
      dept_id: '',
      salary: '',
      commission_pct: '',
    };
  },
  methods: {
    // 입력값 체크하기 - 체크가 성공하면 createHandler 호출
    checkHandler() {
      // 사용자 입력값 체크하기
      // 작성자, 제목, 내용
      // 없을 경우 각 항목에 맞는 메세지를 출력
      let err = true;
      let msg = '';
      !this.name &&
        ((msg = '이름을 입력해주세요'), (err = false), this.$refs.name.focus());
      err &&
        !this.mailid &&
        ((msg = '이메일을 입력해주세요'),
        (err = false),
        this.$refs.mailid.focus());
      err &&
        !this.start_date &&
        ((msg = '고용일을 입력해주세요'),
        (err = false),
        this.$refs.start_date.focus());
      err &&
        !this.manager_id &&
        ((msg = '관리자를 입력해주세요'),
        (err = false),
        this.$refs.manager_id.focus());
      err &&
        !this.title &&
        ((msg = '직책을 입력해주세요'),
        (err = false),
        this.$refs.title.focus());
      err &&
        !this.dept_id &&
        ((msg = '부서를 입력해주세요'),
        (err = false),
        this.$refs.dept_id.focus());
      err &&
        !this.salary &&
        ((msg = '월급을 입력해주세요'),
        (err = false),
        this.$refs.salary.focus());
      err &&
        !this.commission_pct &&
        ((msg = '커미션을 입력해주세요'),
        (err = false),
        this.$refs.commission_pct.focus());

      if (!err) alert(msg);
      // 만약, 내용이 다 입력되어 있다면 createHandler 호출
      else this.createHandler();
    },

    createHandler() {
      // 로컬스토리지에 저장된 데이터 가져오기
      axios.get('http://localhost:9999/vue/api/board').then(({ data }) => {
        const board = data;
        // 데이터 선언
        let newBoard = {
          sequence: 0,
          items: [],
        };

        // 사원아이디 증가
        newBoard.sequence = board.length + 1;
        // 저장
        axios
          .post('http://localhost:9999/vue/api/board', {
            id: newBoard.sequence,
            name: this.name,
            mailid: this.mailid,
            start_date: this.start_date,
            manager_id: this.manager_id,
            title: this.title,
            dept_id: this.dept_id,
            salary: this.salary,
            commission_pct: this.commission_pct,
          })
          .then(({ data }) => {
            let msg = '등록 처리시 문제가 발생했습니다.';
            if (data === 'success') {
              // 등록 성공 메세지 출력
              msg = '등록이 완료되었습니다.';
            }
            alert(msg);
            // 목록 페이지로 이동하기
            this.moveList();
          });
      });
    },
    moveList() {
      this.$router.push('/list');
    },
  },
};
