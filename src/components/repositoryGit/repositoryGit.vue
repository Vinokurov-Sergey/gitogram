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

<style lang="scss" src="./repositoryGit.scss" scoped></style>
