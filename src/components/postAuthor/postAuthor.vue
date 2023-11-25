<template>
    <div class="container-author">
        <div class="avatar">
            <img :src="avatar" class="img" alt="author avatar">
    </div>
    <span class="name">{{ name }}</span>
    </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./postAuthor.scss" scoped></style>
