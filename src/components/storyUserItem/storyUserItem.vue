<template>
    <!-- <button class="c-story-user-item" @click="$emit('onPress')"> -->
    <button class="c-story-user-item" @click="$emit('thisReadme')">
        <div class="avatar">
            <img :src="avatar" class="img" alt="username avatar">
        </div>
        <div class="username">{{ username }}</div>
    </button>
</template>

<script>
export default {
  emits: ['thisReadme'],
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.username {
    margin-top: 10px;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
}

.img {
  width: 80px;
  height: 80px;
}
</style>
