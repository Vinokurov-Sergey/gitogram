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

<style scoped>

.img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.container-author {
    width: 979px;
    margin: 0 auto;
    display: flex;
    padding-left: 20px;
    align-items: center;
    gap: 13px;
    margin-top: 32px;
    margin-bottom: 16px;
    /* border: 1px solid red; */
}

.name {
    font-size: 18px;
    font-weight: 700;
}

.avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    overflow: hidden;
}
</style>
