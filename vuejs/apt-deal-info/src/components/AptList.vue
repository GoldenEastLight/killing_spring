<template>
  <div>
    <apt-list-item v-for="(apt, index) in apts" :key="index" />
  </div>
</template>

<script>
import AptListItem from '@/components/AptListItem.vue';

export default {
  name: 'AptList',
  components: {
    AptListItem,
  },
  data() {
    return {
      apts: ['a', 'a', 'a', 'a', 'a'],
    };
  },
};
</script>

<style></style>
