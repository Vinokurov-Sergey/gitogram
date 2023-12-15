<template>
  <div :class="['slide', { active }]">
    <div class='slide__wrapper'>
      <div class="header">
        <slider-progress :active="active" :startProgress="startProgress" @onFinish="$emit('onProgressFinish')"/>
        <post-author
                    :avatar="data.avatar"
                    :name="data.username" />
      </div>
      <div class="content-wrapper">
        <div class="loader" v-if="loading">
          <spinner />
        </div>
        <div class="info" v-else>
          <div v-if="data.content" class="content" v-html="data.content"></div>
          <placeholder v-else :paragraphs="2" />
        </div>
      </div>
      <div class="footer">
        <sliderButton />
      </div>
      <template v-if="active">
        <button class="arrow arrow-prev" v-if="navBtns.includes('prev')" @click="$emit('clickPrev')">
          <span class="icon">
            <icon name="arrow" />
          </span>
        </button>
        <button class="arrow arrow-next" v-if="navBtns.includes('next')" @click="$emit('clickNext')">
          <span class="icon">
            <icon name="arrow" />
          </span>
        </button>
      </template>
    </div>
  </div>
</template>
<script>
import { postAuthor } from '../postAuthor'
import { sliderButton } from '../SliderButton'
import { sliderProgress } from '../sliderProgress'
import { icon } from '../../icons'
import { placeholder } from '../placeholder'
import { spinner } from '../spinner'

export default {
  emits: ['clickPrev', 'clickNext', 'onProgressFinish'],
  props: {
    active: Boolean,
    loading: Boolean,
    startProgress: Boolean,
    navBtns: {
      type: Array,
      default: () => ['prev', 'next'],
      validator (value) {
        return value.every((item) => item === 'next' || item === 'prev')
      }
    },
    data: {
      type: Object,
      required: true
    }
  },
  components: { sliderButton, sliderProgress, postAuthor, icon, placeholder, spinner }
}
</script>
<!-- <style lang="scss" src="./sliderItem.scss" scoped></style> -->
<style scoped>
.slide {
    display: flex;
    justify-content: center;
    transition: .3s;
    transform: scale(.8);
    pointer-events: none;
    user-select: none;
    position: relative;
    &.active {
      transform: scale(1);
      z-index: 10;
      pointer-events: initial;
      user-select: initial;
    }
}
.slide__wrapper {
    width: 376px;
    height: 667px;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    position: relative;
}

.header {
    padding: 8px 8px 13px;
    border-bottom: 1px solid #ccc;
}

.content-wrapper {
    padding: 20px 15px;
    flex: 1;
    overflow: auto;
}

.loader {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.footer {
    border-top: 1px solid #ccc;
    padding: 24px 0 32px;
    display: flex;
    justify-content: center;
}

.icon {
    display: block;
    transition: .2s;
    &:hover {
      color: #31AE54;
    }
}

.arrow {
    position: absolute;
    top: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: green;
    border: 2px solid #000;
    background: #fff;
    border-radius: 50%;
    transform: translateY(-50%);

}
.arrow-prev {left: -58px;}

.arrow-prev .icon {transform: rotate(.5turn);}
.arrow-next {right: -58px;}
</style>
