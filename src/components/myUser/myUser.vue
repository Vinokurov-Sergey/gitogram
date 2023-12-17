<template>
        <div class="user-avatar">
            <img :src="avatar" class="img" alt="user avatar">
    </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

.img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;
}
</style>
