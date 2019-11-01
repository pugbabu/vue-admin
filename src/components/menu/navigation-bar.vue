<template>
  <div class="navibar-style">
    <a-menu
      :default-selected-keys="defaultSelectedKeys"
      :default-open-keys="[defaultOpenKeys]"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      style="width:100%;height:100%;"
      :open-keys="openKeys"
      @openChange="onOpenChange"
    >
      <template v-for="item in menuItems">
        <a-menu-item
          v-if="!item.children"
          :key="item.key"
        >
          <img :src="item.iconSrc" />
          <span class="menuSpan">{{ item.title }}</span>
        </a-menu-item>
        <a-sub-menu
          v-else
          :key="item.key"
          :menu-info="item"
          @titleClick="titleClick"
        >
          <span slot="title">
            <img :src="item.iconSrc" />
            <span class="menuSpan">{{ item.title }}</span>
          </span>
          <a-menu-item
            v-for="subItem in item.children"
            :key="subItem.key"
          >
            <span>{{ subItem.title }}</span>
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: "bi-navigation-bar",
  props: {
    //设置导航栏的宽度
    width: {
      type: Number,
      default: 240
    },
    //设置导航栏的高度
    height: {
      type: Number,
      default: 1032
    },
    //用于存放菜单项信息，包括key、title、iconSrc、children
    menuItems: {
      type: Array,
      default: function() { 
        return [];
      }
    },
    //初始选中的菜单项 key 数组
    defaultSelectedKeys: {

    },
    //初始展开的 SubMenu 菜单项 key 数组，默认为第一项
    defaultOpenKeys: {
      type: String,
      default: function(){
        return this.menuItems[0].key;
      }
    },  
  },
  data () {
    return {
      openKeys: [this.defaultOpenKeys],
    };
  },
  computed: {
    //所有一级菜单项的key
      rootSubmenuKeys: function () {
          let submenuKeys = [];
          for(var i=0;i<this.menuItems.length;i++){
              submenuKeys.push(this.menuItems[i].key);
          }
          return submenuKeys;
      },
      collapsed() {
        return this.$store.getters.collapsed;
      },
  },
  methods: {
    //点击 MenuItem 调用此函数
    click(e) {
      alert(3);
      this.$emit('click',e);
    },
    //点击子菜单标题
    titleClick(e) {
      this.$emit('titleClick',e);
    },
    //SubMenu 展开/关闭的回调，此处用于设置只展开当前父级菜单
    onOpenChange (openKeys) {
      console.log(openKeys);
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  },
};
</script>

<style>
@import url('../../assets/styles/navigation-bar.css');
</style>