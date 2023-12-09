<template>
  <div class="c-progress" :class="{ active: active && startProgress }">
  <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
export default {
  title: 'progress',
  emits: ['onFinish'],
  props: {
    active: Boolean,
    startProgress: Boolean
  },
  // emits: ["onFinish"],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  },
  mounted () {
    this.$refs.indicator.addEventListener('transitioned', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitioned', this.emitOnFinish)
  }

}
</script>

<!-- <style lang="scss" scoped src="./sliderProgress.scss"> -->
<style scoped>
.c-progress {
background: rgba(49, 174, 84, 0.3);
height: 2px;
border-radius: 10px;
position: relative;
overflow: hidden;

 &.active {
   .indicator {
    transition: 5s;
     width: 100%;
   }
}

}

.indicator {
position: absolute;
top: 0;
bottom: 0;
left: 0;
width: 0;
background: green;
transition: 5s;
}

</style>
