<template>
    <div class="c-comment">
        <p>
            <span class="username">{{ username }}</span>
            {{ text }}
        </p>
    </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    username: {
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
.c-comment {
    display: flex;
}

.username {
    font-weight: 700;
}
</style>
