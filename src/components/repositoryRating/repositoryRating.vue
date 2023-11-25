<template>
    <div class="container-rating">
      <button class="btn stars-btn">
        <div class="icon-rating"><icon name="star" /></div>
        Star
        </button>
      <span class="btn stars">{{ stars }}</span>
      <button class="btn forks-btn">
        <div class="icon-rating"><icon name="fork" /></div>
        Fork
      </button>
      <span class="btn forks">{{ forks }}</span>
    </div>
</template>

<script>
import { icon } from '../../icons'
export default {
  components: { icon },
  props: {
    stars: {
      type: Number,
      required: true
    },
    forks: {
      type: Number,
      required: true
    }
  }
}
</script>
<style lang="scss" src="./repositoryRating.scss" scoped></style>
