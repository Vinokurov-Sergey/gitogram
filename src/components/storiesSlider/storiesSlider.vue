<template>
    <div class="slider">
      <div class="stories-container">
        <ul class="stories" ref="slider">
          <li class="stories__item" ref="item" v-for="(item, index) in data" :key="item.id">
            <sliderItem
              :data="getStoryData(item)"
              :active="slideIndex === index"
              :startProgress="readyForProgress"
              :loading="slideIndex === index && loading"
              :navBtns="activeBtns"
              @clickPrev="handleSlide(slideIndex - 1)"
              @clickNext="handleSlide(slideIndex + 1)"
              @onProgressFinish="handleSlide(slideIndex + 1)"
              @onFollow="starRepo(item.id)"
              @onUnFollow="unStarRepo(item.id)"
            />
          </li>
        </ul>
      </div>
    </div>
  </template>

<script>
import { sliderItem } from '../sliderItem'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    sliderItem
  },
  data () {
    return {
      slideIndex: 0,
      sliderPos: 0,
      loading: false,
      navBtns: true,
      readyForProgress: true
    }
  },
  props: {
    initialSlide: { type: Number }
  },
  emits: ['noMoreSlides'],
  computed: {
    ...mapState({
      data: state => state.trendings.data
    }),
    activeBtns () {
      if (this.navBtns === false) return []
      if (this.slideIndex === 0) return ['next']
      if (this.slideIndex === this.data.length - 1) return ['prev']
      return ['prev', 'next']
    }
  },
  methods: {
    ...mapActions({
      getData: 'trendings/getData',
      getReadme: 'trendings/getReadme',
      starRepo: 'trendings/starRepo',
      unStarRepo: 'trendings/unStarRepo'
    }),
    getStoryData (obj) {
      return {
        id: obj.id,
        avatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme,
        following: obj.following
      }
    },
    async getActiveReadme () {
      const { id, owner, name } = this.data[this.slideIndex]
      await this.getReadme({
        id,
        owner: owner.login,
        repo: name
      })
    },
    goToSlide (indexOfSlide) {
      const { slider, item } = this.$refs
      const slideWidth = parseInt(getComputedStyle(item[indexOfSlide]).width, 10)
      this.slideIndex = indexOfSlide
      this.sliderPos = -(slideWidth * indexOfSlide)
      slider.style.transform = `translateX(${this.sliderPos}px)`
    },
    async loadReadme () {
      this.loading = true
      this.navBtns = false
      this.readyForProgress = false
      try {
        await this.getActiveReadme()
      } catch (error) {
        alert(error)
      } finally {
        this.loading = false
        this.navBtns = true
        this.readyForProgress = true
      }
    },
    async handleSlide (indexOfSlide) {
      if (indexOfSlide < this.data.length) {
        this.goToSlide(indexOfSlide)
        await this.loadReadme()
      } else {
        this.$emit('noMoreSlides')
      }
    }
  },
  async mounted () {
    if (this.initialSlide) {
      const index = this.data.findIndex(item => item.id === this.initialSlide)
      await this.handleSlide(index)
    }
    if (this.data.length === 0) {
      await this.getData()
    }
    await this.loadReadme()
  }
}
</script>

  <!-- <style lang="scss" scoped src="./storiesSlider.scss"></style> -->
  <style scoped>
.stories-container {
    position: relative;
}

.stories {
    position: absolute;
    left: 50%;
    display: flex;
    align-items: center;
    margin-left: -188px;
    transition: .4s;
}
</style>
