<template>
    <div class="wrapper">
      <header class="header">
        <div class="container">
          <div class="header-content">
            <button class="header__logo" @click="$router.push('/')">
              <icon name="logo" />
            </button>
            <button class="close" @click="$router.push('/')">
              <icon name="close" />
            </button>
          </div>
        </div>
      </header>
      <div class="stories__slider">
        <storiesSlider :initialSlide="Number($route.params.initialSlide)" @noMoreSlides="$router.push('/')"/>
    </div>
    </div>
  </template>

<script>
import { icon } from '../../icons'
import { storiesSlider } from '../../components/storiesSlider'
export default {
  components: {
    icon,
    storiesSlider
  }
}
</script>

  <style lang="scss" scoped src="./stories.scss"></style>
