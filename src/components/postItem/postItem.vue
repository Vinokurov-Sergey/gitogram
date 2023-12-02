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

<style scoped>
.head {
    font-size: 26px;
    font-weight: 700;
}

.text {
    font-size: 14px;
    font-weight: 400;
}
</style>
