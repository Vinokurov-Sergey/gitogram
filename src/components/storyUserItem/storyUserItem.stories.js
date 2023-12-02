import storyUserItem from './storyUserItem.vue'
export default {
  title: 'storyUserItem',
  components: { storyUserItem },
  argTypes: {
    avatar: {
      control: { type: 'text' }
    },
    username: {
      control: { type: 'text' }
    }
  }
}

export const DefaultView = (args) => ({
  components: { storyUserItem },
  data () {
    return { args }
  },
  template: `
  <storyUserItem v-bind="args">
  </storyUserItem>
    `
})

DefaultView.story = {
  name: 'Стандартный вид'
}
