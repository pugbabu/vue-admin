<template>
  <a-layout-sider
    v-model="collapsed"
    :collapsible="collapsible"
    :trigger="null"
    :width="collapsed ? 80 : 240"
    :class="['layout-sider']"
  >
    <Logo />
    <Menu />
  </a-layout-sider>
</template>

<script>
import Logo from "@/components/logo";
import Menu from "@/components/menu/index.vue";
export default {
  name: "LayoutSider",
  components: { Logo, Menu },
  props: {
    collapsible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      menuItems: [
        {
          key: "1",
          title: "权限管理",
          iconSrc: require("../assets/svg/alarm.svg"),
          path: '/permission'
        },
        {
          key: "2",
          title: "设备监控",
          iconSrc:require("../assets/svg/alarm.svg"),
          children: [
             {
              id: "21",
              icon: "",
              path: "/device/ats",
              title: "ATS"
            }
          ]
        }
      ]
    };
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
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
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
    // box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
  }
}
</style>
