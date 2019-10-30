<!--  -->
<template>
  <a-layout-header
    class="layout-header"
  >
    <div class="header-left">
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="changeCollapsed"
      />
    </div>
    <div class="header-right">
      <header-actions />
    </div>
    <!-- <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="changeCollapsed"
    /> -->
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
    padding: 0 16px 0 0;
    display: flex;
    justify-content: space-between;
    transition: all 0.3s;
    z-index: 100;
    background: #fff;
    
    &.layout-header__dark {
      background: linear-gradient(180deg, #31363c 0%, #16191c 100%);
      color: #fff;
      
      .trigger {
        color: #fff;
      }
    }
    
    &.layout-header__light {
      background-color: #fff;
      box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    }
    
    &.layout-header__fixed {
      position: fixed;
      right: 0;
      top: 0;
    }
    
    .header-left {
      display: flex;
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