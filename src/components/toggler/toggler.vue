<template>
    <button :class="['button', {'active': isOpened}]" @click="toggle" id="id">
        <span class="text">{{ isOpened ? 'Hide' : 'Show' }} issues</span>
        <span class="icon">
            <icon name="triangle" />
        </span>
    </button>
</template>

<script>
import { icon } from '../../icons'
export default {
  components: {
    icon
  },
  emits: ['onToggle'],
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
      this.$emit('onToggle', this.isOpened)
    }
  }
}
</script>

<style scoped>
.button {
    display: inline-flex;
    align-items: center;
    padding: 0;

    .icon {
        width: 10px;
        transform: rotate(180deg);
    }
    &.active {
        .icon {
            transform: rotate(0deg);
        }
    }
}

.text {
    margin-right: 5px;
}
</style>
