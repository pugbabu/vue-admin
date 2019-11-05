<!--  -->
<template>
  <a-layout-header
    class="layout-header"
  >
    <div class="header-left">
      <a-icon
        :style="{color:'#F39800'}"
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="changeCollapsed"
      />
    </div>
    <div class="header-right">
      <header-actions />
    </div>
  </a-layout-header>
</template>

<script>
import HeaderActions from '@/components/header-actions';
export default {
  components: {
    HeaderActions
  },
  data() {
    return {};
  },
  computed: {
   collapsed() {
      return  this.$store.getters.collapsed;
    }
  },
  methods: {
    changeCollapsed() {
      this.$store.commit('setCollapsed', !this.collapsed);
    }
  }
};
</script>

<style lang="less" scoped>
 .layout-header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    transition: all 0.3s;
    z-index: 100;
    background: var(--dark1);
    color: #fff;
    align-items: center;
    padding: 0;
    padding-right: 20px;
    
    .header-left {
      display: flex;
    }
    .header-right{
      height: 100%;
    }
    
    .trigger {
      line-height: 70px;
      padding: 0 24px;
      font-size: 20px;
      cursor: pointer;
      color: #333;
      transition: color 0.3s;
      
      &:hover {
        background: rgba(0, 0, 0, 0.025);
      }
    }
  }
</style>