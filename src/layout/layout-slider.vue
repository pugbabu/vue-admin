<template>
  <a-layout-sider
    v-model="collapsed"
    :collapsible="collapsible"
    :trigger="null"
    :width="collapsed ? 80 : 256"
    :class="['layout-sider', fixedSiderbar && 'layout-sider__fixed', menuTheme === 'light' && 'light-theme']"
  >
    <Logo />
    <Menu />
  </a-layout-sider>
</template>

<script>
import { appStoreMixin } from '@/mixins';
import Logo from '@/components/logo';
import Menu from '@/components/menu';

export default {
  name: 'LayoutSider',
  components: { Logo, Menu },
  mixins: [appStoreMixin],
  props: {
    collapsible: {
      type: Boolean,
      default: true
    },
  },
  computed: {
    collapsed() {
      return this.$store.getters.collapsed;
    }
  }
};
</script>

<style lang="less" scoped>
  .layout-sider {
    overflow: auto;
    min-height: 100vh;
    transition: all 0.3s;
    z-index: 10;
    background: linear-gradient(
        180deg,
        rgba(49, 54, 60, 1) 0%,
        rgba(22, 25, 28, 1) 100%
    );
    
    &.layout-sider__fixed {
      position: fixed;
      left: 0;
      height: 100vh;
    }
    
    &.light-theme {
      background: #fff !important;
      box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
    }
  }
</style>
