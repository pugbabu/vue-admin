<template functional>
  <a-sub-menu
    :key="props.menuInfo.key"
    @titleClick="titleClick"
  >
    <span slot="title">
      <a-icon type="mail" /><span>{{ props.menuInfo.title }}</span>
    </span>
    <template v-for="item in props.menuInfo.children">
      <a-menu-item
        :key="item.key"
      >
        <a-icon type="pie-chart" />
        <span>{{ item.title }}</span>
      </a-menu-item>
    </template>
  </a-sub-menu>
</template>
<script>
export default {
  props: ['menuInfo'],
  methods: {
    handleClick() {
      console.log(e);
    },
    titleClick() {
      console.log('sfsd');
    }
  }

};
</script>