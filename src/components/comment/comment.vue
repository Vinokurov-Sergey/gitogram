<template>
    <div class="c-comment">
      <!-- <span>comment</span> -->
      <p v-if="issue.no_issue">
      <!-- <p v-if="issue === undefined"> -->
      <!-- <span class="red-text bold">{{ issue.no_issue }}</span> -->
      <span>{{ issue.no_issue }}</span>
      <!-- <span>no message</span> -->
    </p>
    <p v-else>
      <!-- <p> -->
      <span class="username">{{ issue.user.login }}</span>
      <span v-if="issue.body">{{ issue.body }}</span>
      <!-- <span v-else class="red-text">There is no text for this issue</span> -->
      <span v-else>No text</span>
    </p>
    </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    issue: {
      type: Object,
      required: true
    }
    // username: {
    //   type: String,
    //   required: true
    // },
    // text: {
    //   type: String,
    //   required: true
    // }
  }
}
</script>

<style scoped>
.c-comment {
    display: flex;
    /* justify-content: left; */
    text-align: left;
}

.username {
    font-weight: 700;
    margin-right: 5px;
}
</style>
