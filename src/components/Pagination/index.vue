<template>
  <div class="pagination">
    <button @click="$emit('getPageNo', pageNo - 1)" class="current">
      上一页
    </button>
    <button
      v-if="startNumAndEndNum.start > 1"
      @click="PageNoInfo(1)"
      :class="{ active: this.pageNo == 1 }"
      class="current"
    >
      1
    </button>
    <button
      v-if="startNumAndEndNum.start > 2"
      style="background: white; cursor: default"
    >
      ···
    </button>
    <button
      v-for="(page, index) in startNumAndEndNum.end"
      v-if="page >= startNumAndEndNum.start"
      @click="PageNoInfo(page)"
      :class="{ active: pageNo == page }"
      class="current"
      :key="index"
    >
      {{ page }}
    </button>

    <button
      v-if="startNumAndEndNum.end < totalPage - 1"
      style="background: white; cursor: default"
    >
      ···
    </button>
    <button
      v-if="startNumAndEndNum.end < totalPage"
      @click="PageNoInfo(totalPage)"
      :class="{ active: this.pageNo == totalPage }"
      class="current"
    >
      {{ totalPage }}
    </button>
    <button @click="$emit('getPageNo', pageNo + 1)" class="current">
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    //计算总页数
    totalPage() {
      //向上取整
      return Math.ceil(this.total / this.pageSize);
    },
    //计算出连续页码的起使数字和结束数字
    startNumAndEndNum() {
      const { continues, pageNo, totalPage } = this;
      let start = 0,
        end = 0;
      //当总页数小于连续页数时
      if (continues > totalPage) {
        start = 1;
        end = this.totalPage;
      } else {
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        if (start < 1) {
          start = 1;
          end = continues;
        }
        if (end > totalPage) {
          start = totalPage - continues + 1;
          end = totalPage;
        }
      }
      return { start, end };
    },
  },
  methods: {
    //传递页码进行跳转
    PageNoInfo(num) {
      this.$emit("getPageNo", num);
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: pink; //#409eff
      color: #fff;
    }
  }
  .current:hover {
    border-top: red solid 1px;
    border-bottom: red solid 1px;
  }
}
</style>