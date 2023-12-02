import postItem from './postItem.vue'
export default {
  title: 'postItem',
  components: { postItem },
  argTypes: {
    head: {
      control: { type: 'text' }
    },
    text: {
      control: { type: 'text' }
    }
  }
}

export const DefaultView = (args) => ({
  components: { postItem },
  data () {
    return { args }
  },
  template: `
  <post-item v-bind="args" />
    `
})

DefaultView.story = {
  name: 'Стандартный вид'
}
