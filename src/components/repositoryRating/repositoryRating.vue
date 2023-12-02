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
<style scoped>
.container-rating {
    margin-top: 32px;
    display: inline-flex;
    height: 28px;
}

.btn {
    border: 1px solid rgba(27, 31, 35, 0.15);
    background: #FAFBFC;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon-rating {
        width: 16px;
        height: 16px;
        margin-right: 4px;
    }
}

.stars-btn {
    width: 73px;
    border-radius: 6px 0 0 6px;
}

.stars {
    padding: 0 11px;
}

.forks-btn {
    width: 73px;
}

.forks {
    padding: 0 11px;
    border-radius: 0 6px 6px 0;
}
</style>
