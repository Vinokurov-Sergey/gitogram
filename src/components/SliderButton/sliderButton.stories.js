import sliderButton from './sliderButton.vue'
export default {
  title: 'sliderButton',
  components: { sliderButton },
  argTypes: {
    text: {
      control: { type: 'text' }
    }
  }
}

export const DefaultView = (args) => ({
  components: { sliderButton },
  data () {
    return { args }
  },
  template: `
  <sliderButton v-bind="args">button</sliderButton>
    `
})

DefaultView.story = {
  name: 'Стандартный вид'
}
