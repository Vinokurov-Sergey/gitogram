<template>
    <button class="button"> {{ text || "Follow" }} </button>
</template>

<script>
export default {
  title: 'sliderButton',
  props: {
    text: String
  }
}

</script>

<style scoped>
.button {
    min-width: 270px;
    min-height: 44px;
    background: #31AE54;
    outline: none;
    border: none;
    border-radius: 4px;
    color: #ffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
</style>
