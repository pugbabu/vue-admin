<template>
  <div class="actions-wrapper">
    <span
      class="action"
      title="注销"
      style="font-size: 22px;"
      @click="handleClick({key: 'logout'})"
    >
      <a-icon type="poweroff" />
    </span>
    <span class="action welcome">欢迎您，{{ username }}</span>
  </div>
</template>
<script>
export default {
  data () {
    return { modalVisible: false };
  },
  computed: {
    username() {
      let user = this.$store.getters.user;
      return user;
    }
  },
  methods: {
    handleClick ({ key }) {
      const that = this;
      if (key === 'logout') {
        this.$confirm({
          title: '注销',
          content: `确定要注销当前登录吗？`,
          okText: '注销',
          okType: 'danger',
          onOk () {
           
           
          },
          onCancel () {
            that.$message.warning('取消操作');
          }
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
  .actions-wrapper {
    overflow: hidden;
    
    .actions-trigger {
      transform: rotate(90deg);
      cursor: pointer;
      color: #fff;
    }
    
    .action {
      display: inline-block;
      height: 100%;
      padding: 0 12px;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.3s;
      
      &:hover {
        background: rgba(0, 0, 0, 0.025);
      }
    }
    
    .avatar,
    .welcome {
      cursor: default;
      user-select: none;
      &:hover {
        background: none;
      }
    }
  }
</style>
