<template>
  <div>
    我是权限管理页面
    <div class="wrapper">
      <a-tree-select
        v-test:that="that"
        style="width: 300px"
        :treeData="treeData"
        :value="value"
        treeCheckable
        :showCheckedStrategy="SHOW_PARENT"
        searchPlaceholder="Please select"
        @change="onChange"
        @blur="handleBlur"
        @focus="handleFocus"
        @treeExpand="treeExpand"
        @select="onSelect"
        @click.stop="handleClick"
      />
      <a-icon
        v-if="!expandFlag"
        type="down"
      />
      <a-icon
        v-else
        type="up"
      />
    </div>
  </div>
</template>

<script>
  import { TreeSelect } from 'ant-design-vue';
  const SHOW_PARENT = TreeSelect.SHOW_PARENT;

  const treeData = [
    {
      title: 'Node1',
      value: '0-0',
      key: '0-0',
      children: [
        {
          title: 'Child Node1',
          value: '0-0-0',
          key: '0-0-0',
        },
      ],
    },
    {
      title: 'Node2',
      value: '0-1',
      key: '0-1',
      children: [
        {
          title: 'Child Node3',
          value: '0-1-0',
          key: '0-1-0',
          disabled: true,
        },
        {
          title: 'Child Node4',
          value: '0-1-1',
          key: '0-1-1',
        },
        {
          title: 'Child Node5',
          value: '0-1-2',
          key: '0-1-2',
        },
      ],
    },
  ];
  export default {
    directives:{ 
      test: {
        bind(el, binding) {
          let that = binding.value;
          el.addEventListener('click', function() {
            if (el.getAttribute('aria-expanded')) {
              that.expandFlag = true;
            } else {
              that.expandFlag = false;
            }
          });
          document.body.addEventListener('click', (e) => {
            console.log(e);
            if (e.target != el) {
              that.expandFlag = false;
            }
          });
        }
      }
    },
    data() {
      return {
        value: ['0-0-0'],
        treeData,
        SHOW_PARENT,
        expandFlag: false,
        that: this
      };
    },
    methods: {
      onChange(value) {
        console.log('onChange ', value);
        this.value = value;
      },
      handleFocus() {
        console.log('onFocus');
      },
      handleBlur() {
        console.log('onBlur');
      },
      treeExpand() {
        console.log('treeExpand');
      },
      onSelect() {
        console.log('onSelect');

      },
      handleClick() {
        console.log('click');
      }
    },
  };
</script>S

<style scoped>
</style>