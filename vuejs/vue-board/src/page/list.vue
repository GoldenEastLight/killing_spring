<template>
  <div>
    <div v-if="items.length">
      <div class="text-right">
        <input type="text" v-model="search" /><button @click="searchBoard()">
          검색
        </button>
      </div>
      <table class="table table-bordered table-condensed">
        <colgroup>
          <col :style="{ width: '5%' }" />
          <col :style="{ width: '50%' }" />
          <col :style="{ width: '10%' }" />
          <col :style="{ width: '25%' }" />
        </colgroup>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>날짜</th>
        </tr>
        <list-row
          v-for="(item, index) in items"
          :key="`${index}_items`"
          :no="item.no"
          :title="item.title"
          :writer="item.writer"
          :regtime="item.regtime"
        />
      </table>
    </div>
    <div v-else>글이 없습니다.</div>
    <div class="text-right">
      <button class="btn btn-primary" @click="movePage">등록</button>
    </div>
  </div>
</template>

<script>
import http from '@/util/http-common';
import ListRow from '@/components/Row.vue';
export default {
  name: 'list',
  components: {
    ListRow,
  },
  data: function() {
    return {
      search: '',
      items: [],
    };
  },
  created() {
    /*
    http
      .get('/board')
      .then(({ data }) => {
        this.items = data;
      })
      .catch(() => {
        alert('에러가 발생했습니다.');
      });
      */
    this.getBoard();
  },
  methods: {
    async getBoard() {
      try {
        let { data } = await http.get('/board');
        this.items = data;
      } catch (error) {
        alert('에러가 발생했습니다.');
      }
    },
    movePage() {
      this.$router.push('/create');
    },
    searchBoard() {
      http.get('/board').then(({ data }) => {
        const boards = data;
        let newItems = {
          items: [],
        };
        boards.forEach((board) => {
          if (board.title.indexOf(this.search) !== -1) {
            newItems.items.push({
              key: board.key,
              no: board.no,
              title: board.title,
              writer: board.writer,
              regtime: board.regtime,
            });
          }
        });
        console.dir(newItems);
        this.items = newItems.items;
      });
    },
  },
};
</script>

<style>
.text-right {
  text-align: right !important;
}
</style>
