import progress from './sliderProgress.vue'

export default {
  title: 'progress bar',
  component: { progress },
  argTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'progress loaded'
    }
  }
}

export const DefaultView = (args) => ({
  components: {
    xProgress: progress
  },
  data () {
    return { args }
  },
  template: `
  <x-progress @onFinish="args.onFinish"></x-progress>
    `
})
