<template>
    <div class="placeholder">
      <div class="mainpic"></div>
      <div class="content" v-for="n in paragraphs" :key="n">
        <div class="item"></div>
      </div>
    </div>
  </template>
<script>
export default {
  props: {
    paragraphs: {
      type: Number,
      default: 1
    }
  }
}
</script>

  <!-- <style lang="scss" scoped src="./placeholder.scss"></style> -->
  <style scoped>
.placeholder {
    color: #dedede;
  }

  .mainpic {
    height: 136px;
    margin-bottom: 28px;
    border-radius: 4px;
    background: currentColor;
  }

  .content {
    &:not(:last-child) {
      margin-bottom: 18px;
    }

    &:after, &:before, .item {
      content: "";
      display: block;
      background: currentColor;
      height: 14px;
      border-radius: 4px;
      margin-bottom: 8px;
    }

    &:before {
      width: 65%;
    }

    .item {
      width: 80%;
    }

    &:after {
      width: 55%;
    }
  }
</style>
