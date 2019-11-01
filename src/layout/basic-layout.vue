<template>
  <a-layout id="component-layout">
    <layout-slider />
    <a-layout>
      <layout-header />
      <a-layout-content
        style=" background: '#fff';height:100%;overflow:auto;"
      >
        <div class="layout-content--inner">
          <transition name="page-transition">
            <view-layout />
          </transition>
        </div>
      </a-layout-content>
      <!-- <transition name="page-transition">
        <view-layout />
      </transition> -->
      <!-- <layout-footer /> -->
    </a-layout>
  </a-layout>
</template>
<script>
import LayoutSlider from "./layout-slider";
import LayoutHeader from "./layout-header";
import LayoutFooter from "./layout-footer";
import ViewLayout from "./view-layout";

export default {
  components: {
    LayoutSlider,
    LayoutHeader,
    LayoutFooter,
    ViewLayout
  },
  data() {
    return {};
  },
  computed: {
    collapsed() {
      return this.$store.getters.collapsed;
    }
  }
};
</script>
<style>
.layout-content--inner{
  height: 100%;
}
#component-layout{
  height: 100%;
}
#component-layout .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#component-layout .trigger:hover {
  color: #1890ff;
}

/* #component-layout .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
} */
.page-transition-enter {
  opacity: 0;
}

.page-transition-leave-active {
  opacity: 0;
}

.page-transition-enter .page-transition-container,
.page-transition-leave-active .page-transition-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
