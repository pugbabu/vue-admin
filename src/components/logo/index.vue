<template>
  <div :class="['logo-wrapper', `logo-${menuTheme}`, collapsed && 'is-collapsed']">
    <img
      class="logo"
      src="https://cn.vuejs.org/images/logo.png"
      alt="logo"
    >
    <span
      v-if="!collapsed"
      class="title"
    >众合科技</span>
  </div>
</template>
<script>
import { appStoreMixin, deviceMixin } from '@/mixins';

export default {
  name: 'Logo',
  mixins: [appStoreMixin, deviceMixin],
  computed: {
    collapsed() {
      return this.$store.getters.collapsed;
    }
  }
};
</script>
<style lang="less" scoped>
  .logo-wrapper {
    height: 64px;
    line-height: 64px;
    padding: 0 24px;
    box-sizing: border-box;
    text-align: left;
    overflow: hidden;
    user-select: none;
    transition: all 0.3s;
    display: flex;
    
    &.is-collapsed {
      padding: 0;
      text-align: center;
    }
    
    &.logo-light {
      .title {
        color: rgba(0, 0, 0, 0.65);
      }
    }
    
    .logo {
      display: inline-block;
      vertical-align: middle;
      width: 45px;
    }
    
    .title {
      // display: inline-block;
      vertical-align: middle;
      margin-left: 12px;
      margin-right: 16px;
      font-size: 18px;
      font-weight: bolder;
      font-family: "Ink Free";
      color: #fff;
    }
  }
</style>
