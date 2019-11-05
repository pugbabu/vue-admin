<template>
  <div class="error-page">
    <div class="content">
      <p>抱歉，找不到您访问的资源啦~</p>
      <img src="../../assets/images/404.png" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.error-page{
  padding-top: 100px;
}
.content{
  width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  p{
    font-size: 16px;
    color: #000;
  }
}
</style>
