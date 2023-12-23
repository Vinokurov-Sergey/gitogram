<template>
    <div class="wrapper">
      <div class="info">
        <myUser :avatar="avatar" />
        <div class="rep-data">
          <div class="rep-title">{{ title }}</div>
          <div class="user-type">{{ type }}</div>
        </div>
      </div>
      <div class="follow-btn">
        <sliderButton theme="grey" @click="$emit('onUnFollow', id)">
          Unfollow
        </sliderButton>
      </div>
    </div>
  </template>

<script>
import { myUser } from '../myUser'
import { sliderButton } from '../SliderButton'
export default {
  name: 'subscriber',
  components: { myUser, sliderButton },
  emits: ['onUnFollow'],
  props: {
    avatar: String,
    title: String,
    type: String,
    id: Number
  }
}
</script>
  <style src="./subscriber.scss" lang="scss" scoped></style>
