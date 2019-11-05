<template>
  <a-menu
    class="zh-menu"
    :defaultSelectedKeys="['2']"
    mode="inline"
    theme="dark"
    :inlineCollapsed="collapsed"
    @click="handleMenuClick"
  >
    <template v-for="item in menuItems">
      <a-menu-item
        v-if="!item.children"
        :key="item.path"
      >
        <img :src="item.iconSrc" />
        <span>{{ item.title }}</span>
      </a-menu-item>
      <a-sub-menu
        v-else
        :key="item.path"
        :menu-info="item"
      >
        <template slot="title">
          <img :src="item.iconSrc" />
          <span>{{ item.title }}</span>
        </template>
      
        <a-menu-item
          v-for="subItem in item.children"
          :key="subItem.path"
        >
          {{ subItem.title }}
        </a-menu-item>
      </a-sub-menu>
    </template>
  </a-menu>
</template>

<script>
  export default {
    data() {
      return {
        menuItems: [
        {
          id: "1",
          title: "权限管理",
          iconSrc: require("../../assets/svg/alarm.svg"),
          path: '/permission'
        },
        {
          id: "2",
          title: "设备监控",
          iconSrc:require("../../assets/svg/alarm.svg"),
          children: [
             {
              id: "21",
              icon: "",
              path: "/device/ats",
              title: "ATS"
            },
            {
              id: "22",
              icon: "",
              path: "/device/zc",
              title: "ZC"
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
    },
    methods: {
      handleMenuClick(item) {
        this.$router.push(item.key);
      }
    },
  };
</script>
<style >
@import "../../assets/styles/zh-menu.css";
</style>
