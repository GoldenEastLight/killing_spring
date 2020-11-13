export default {
  template: `
  <div>
      <h3 class="text-center">사원목록</h3>
        <div class="text-center">
          <input type="text" v-model="search"><button>검색</button>
        </div>
      <div v-if="items.length">
        <table class="table table-bordered table-condensed">
          <colgroup>
            <col style="width: 20%" />
            <col style="width: 20%" />
            <col style="width: 20%" />
            <col style="width: 20%" />
            <col style="width: 20%" />
          </colgroup>
          <tr>
            <th>사원 아이디</th>
            <th>사원명</th>
            <th>부서</th>
            <th>직책</th>
            <th>연봉</th>
          </tr>
          <tr v-for="(board, index) in items" :key="index + '_items'">
            <td>{{board.id}}</td>
            <!-- <td><a :href="'read.html?no=' + board.no">{{board.name}}</a></td> -->
            <td>{{board.name}}</a></td>
            <td>{{board.dept}}</td>
            <td>{{board.job}}</td>
            <td>{{parseInt(board.salary * 12)}}</td>
          </tr>
        </table>
      </div>
      <div v-else class="text-center">게시글이 없습니다.</div>
      <div class="text-right">
        <button class="btn btn-primary" @click="movePage">등록</button>
      </div>
      </div>
    `,
  created() {
    const board = localStorage.getItem("board");
    let newBoard = {
      sequence: 0,
      items: [],
    };
    if (board) {
      newBoard = JSON.parse(board);
    } else {
      localStorage.setItem("board", JSON.stringify(newBoard));
    }
    newBoard.items.sort((a, b) => {
      return -(a.no - b.no);
    });
    this.items = newBoard.items;
  },
  methods: {
    getFormatDate(regtime) {
      return moment(new Date(regtime)).format("YYYY.MM.DD");
    },
    movePage() {
      location.href = "create.html";
    },
  },
};
