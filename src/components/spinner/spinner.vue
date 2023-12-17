<template>
    <div class="['spinner', { btn }]">
      <icon name="spinner" />
    </div>
  </template>

<script>
import { icon } from '../../icons'
export default {
  components: { icon },
  props: {
    btn: Boolean
  }
}
</script>

  <!-- <style lang="scss" scoped src="./spinner.scss"></style> -->
  <style scoped>
.spinner {
    color: #31AE54;
    display: inline-block;
    width: 44px;
    height: 44px;
    animation: rotate 1.3s linear infinite;
    &.btn {
    color: #fff;
    width: 20px;
    height: 20px;
  }
  }

  .spinner .btn {
    color: #fff;
    width: 20px;
    height: 20px;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(1turn);
    }
  }
</style>
