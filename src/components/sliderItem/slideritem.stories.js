import sliderItem from './sliderItem.vue'

export default {
  title: 'sliderItem',
  components: { sliderItem }
}

export const DefaultView = () => ({
  components: { sliderItem },
  template: `<sliderItem>
  <h1>text</h1>
  </sliderItem>`
})
