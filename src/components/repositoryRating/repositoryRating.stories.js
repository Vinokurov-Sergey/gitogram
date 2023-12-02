import repositoryRating from './repositoryRating.vue'
export default {
  title: 'repositoryRating',
  components: { repositoryRating },
  argTypes: {
    stars: {
      control: { type: 'number' }
    },
    forks: {
      control: { type: 'number' }
    }
  }
}

export const DefaultView = (args) => ({
  components: { repositoryRating },
  data () {
    return { args }
  },
  template: `
  <repositoryRating v-bind="args" />
    `
})

DefaultView.story = {
  name: 'Стандартный вид'
}
