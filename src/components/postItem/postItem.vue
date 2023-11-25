<template>
    <div class="head">{{ head }}</div>
    <div class="text">{{ text }}</div>
</template>

<script>
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
</script>

<style lang="scss" src="./postItem.scss" scoped></style>
