import comment from './comment.vue'
export default {
  title: 'comment',
  components: { comment },
  argTypes: {
    username: {
      control: { type: 'text' }
    },
    text: {
      control: { type: 'text' }
    }
  }
}

export const DefaultView = (args) => ({
  components: { comment },
  data () {
    return { args }
  },
  template: `
  <comment v-bind="args" />
    `
})

DefaultView.story = {
  name: 'Стандартный вид'
}
