<template>
  <a-menu
    class="zh-menu"
    :defaultSelectedKeys="['2']"
    mode="inline"
    theme="dark"
    :inlineCollapsed="collapsed"
  >
    <template v-for="item in menuItems">
      <a-menu-item
        v-if="!item.children"
        :key="item.id"
      >
        <img :src="item.iconSrc" />
        <span>{{ item.title }}</span>
      </a-menu-item>
      <a-sub-menu
        v-else
        :key="item.id"
        :menu-info="item"
      >
        <template slot="title">
          <img :src="item.iconSrc" />
          <span>{{ item.title }}</span>
        </template>
      
        <a-menu-item
          v-for="subItem in item.children"
          :key="subItem.id"
        >
          {{ subItem.title }}
        </a-menu-item>
      </a-sub-menu>
    </template>
    <!-- <a-menu-item key="1">
      <a-icon type="pie-chart" />
      <span>Option 1</span>
    </a-menu-item>
    <a-menu-item key="2">
      <a-icon type="desktop" />
      <span>Option 2</span>
    </a-menu-item>
    <a-menu-item key="3">
      <a-icon type="inbox" />
      <span>Option 3</span>
    </a-menu-item>
    <a-sub-menu key="sub1">
      <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
      <a-menu-item key="5">
        Option 5
      </a-menu-item>
      <a-menu-item key="6">
        Option 6
      </a-menu-item>
      <a-menu-item key="7">
        Option 7
      </a-menu-item>
      <a-menu-item key="8">
        Option 8
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
      <a-menu-item key="9">
        Option 9
      </a-menu-item>
      <a-menu-item key="10">
        Option 10
      </a-menu-item>
      <a-sub-menu
        key="sub3"
        title="Submenu"
      >
        <a-menu-item key="11">
          Option 11
        </a-menu-item>
        <a-menu-item key="12">
          Option 12
        </a-menu-item>
      </a-sub-menu>
    </a-sub-menu> -->
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
  
    },
  };
</script>
<style >
@import "../../assets/styles/zh-menu.css";
</style>
