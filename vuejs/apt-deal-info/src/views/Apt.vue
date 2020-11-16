<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <h2>아파트 매매 정보</h2>
      </b-col>
    </b-row>
    <search-bar />
    <b-row>
      <b-col cols="5" align="left">
        <apt-list />
      </b-col>
      <b-col cols="7">
        <apt-detail />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import AptList from '@/components/AptList.vue';
import AptDetail from '@/components/AptDetail.vue';

// vue cli enviroment variables 검색
// 반드시 VUE_APP으로 시작해야 한다.
// const API_KEY = process.env.VUE_APP_APT_DEAL_API_KEY;
// const API_URL =
//   'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?LAWD_CD=11110&DEAL_YMD=201512&serviceKey=';

export default {
  name: 'Apt',
  components: {
    SearchBar,
    AptList,
    AptDetail,
  },
  data() {
    return {
      dongCode: '',
      Apts: [],
    };
  },
  methods: {},
};
</script>

<style></style>
