export default {
  template: `
    <div>
      <h3 class="text-center">사원목록</h3>
        <div class="text-center">
          <input type="text" v-model="search"><button @click="searchName()">검색</button>
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
            <td>{{board.dept_id}}</td>
            <td>{{board.title}}</td>
            <td>{{parseInt(board.salary * 12)}}</td>
          </tr>
        </table>
      </div>
      <div v-else class="text-center">사원이 없습니다.</div>
      <div class="text-right">
        <button class="btn btn-primary" @click="movePage">등록</button>
      </div>
    </div>
    `,
  data() {
    return {
      search: '',
      items: [],
    };
  },
  created() {
    // const board = localStorage.getItem("board");
    axios.get('http://localhost:9999/vue/api/board').then(({ data }) => {
      let newBoard = {
        sequence: 0,
        items: [],
      };
      if (data) {
        // newBoard = JSON.parse(data);
        newBoard = data;
      } else {
        localStorage.setItem('board', JSON.stringify(newBoard));
      }
      newBoard.sort((a, b) => {
        return -(a.no - b.no);
      });
      this.items = newBoard;
      console.dir(this.items);
    });
  },
  methods: {
    getFormatDate(regtime) {
      return moment(new Date(regtime)).format('YYYY.MM.DD');
    },
    movePage() {
      this.$router.push('/create');
    },
    searchName() {
      axios.get('http://localhost:9999/vue/api/board').then(({ data }) => {
        const boards = data;
        let newItems = {
          items: [],
        };
        boards.forEach((board) => {
          if (board.name.indexOf(this.search) !== -1) {
            newItems.items.push({
              id: board.id,
              name: board.name,
              mailid: board.mailid,
              start_date: board.start_date,
              manager_id: board.manager_id,
              title: board.title,
              dept_id: board.dept_id,
              salary: board.salary,
              commission_pct: board.commission_pct,
            });
          }
        });
        console.dir(newItems);
        this.items = newItems.items;
      });
    },
  },
};
