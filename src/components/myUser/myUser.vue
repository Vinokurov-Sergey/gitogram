<template>
          <div :class="['user-avatar', getClasses()]">
            <img :src="avatar" class="img" alt="user avatar">
    </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    type: {
      type: String
    }
  },
  methods: {
    getClasses () {
      const classes = {
        profile: this.type === 'profile'
      }
      return classes
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

.user-avatar.profile {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
}
</style>
