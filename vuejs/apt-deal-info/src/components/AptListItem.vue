<template>
  <div style="margin: 10px;"><img src="@/assets/apt.png" class="img-list" alt="" />아이파크</div></template>

<script>
export default {
  name: 'AptListItem',
  data() {
    return {
      isColor: false
    }
  },
  props:{
    apt: Object,
  }
};
</script>

<style>
.img-list {
  width: 50px;
}
</style>
