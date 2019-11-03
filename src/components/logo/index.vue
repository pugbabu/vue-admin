<template>
  <div :class="['logo-wrapper',collapsed && 'is-collapsed']">
    <img
      v-if="!collapsed"
      class="logo"
      src="http://uia.unittec.com/20190628202113.png"
      alt="logo"
    >
    <span
      v-if="collapsed"
      class="text"
    >众合科技</span>
  </div>
</template>
<script>
import { appStoreMixin } from '@/mixins';

export default {
  name: 'Logo',
  // mixins: [appStoreMixin],
  computed: {
    collapsed() {
      return this.$store.getters.collapsed;
    }
  }
};
</script>
<style lang="less" scoped>
  .logo-wrapper {
    height: 80px;
    line-height: 80px;
    // padding: 0 24px;
    box-sizing: border-box;
    text-align: left;
    overflow: hidden;
    user-select: none;
    transition: all 0.3s;
    display: flex;
    background: #e0e0e0;
    align-items: center;
    justify-content: center;
    
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
      height: 30px;
      width: auto;
    }
    
    .text {
      // display: inline-block;
      vertical-align: middle;
      // margin-left: 12px;
      // margin-right: 16px;
      font-size: 16px;
      font-weight: bold;
      font-family: "Ink Free";
      color: #333;
    }
  }
</style>
