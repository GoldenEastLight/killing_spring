<template>
  <tr>
    <td>{{ id }}</td>
    <td>
      <router-link :to="`/read?no=${id}`">{{ name }}</router-link>
    </td>
    <td>{{ dept_name }}</td>
    <td>{{ title }}</td>
    <td>{{ salary }}</td>
  </tr>
</template>

<script>
import moment from 'moment';
export default {
  name: 'row',
  props: {
    id: { type: Number },
    name: { type: String },
    dept_name: { type: String },
    title: { type: String },
    salary: { type: Number },
  },
  methods: {
    getFormatDate(regtime) {
      return moment(new Date(regtime)).format('YYYY.MM.DD');
    },
  },
};
</script>
