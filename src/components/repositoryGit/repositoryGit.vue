<template>
  <div class="c-container">
    <div class="repository">
      <slot name="repositoryGit" />
    </div>
  </div>
</template>

<!-- <script>
export default {
  props: {
    head: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script> -->

<style scoped>
.c-container {
    background: #FAFAFA;
    width: 979px;
    margin: 0 auto;
}

.repository {
    background: #FFFFFF;
    border: 1px solid #F1F1F1;
    border-radius: 10px;
    text-align: left;
    padding-left: 20px;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-right: 44px;
    margin-bottom: 18px;
}
</style>
