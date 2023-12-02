<template>
    <div class='wrapper'>
        <sliderProgress />
        <post-author
                      :avatar="'https://us.123rf.com/450wm/yupiramos/yupiramos1805/yupiramos180511470/101189243-young-man-avatar-character-vector-illustration-design-.jpg?ver=6'"
                      :name="'joshua_l'" />
        <div class="content-wrapper">
            <slot />
        </div>
        <sliderButton />
    </div>
    <div class="avatar"></div>
</template>
<script>
import { postAuthor } from '../postAuthor'
import { sliderButton } from '../SliderButton'
import { sliderProgress } from '../sliderProgress'

export default {
  props: {
    avatar: String,
    name: String
  },
  components: { sliderButton, sliderProgress, postAuthor }
}
</script>
<style lang="scss" src="./sliderItem.scss" scoped></style>
