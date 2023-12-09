import spinner from './spinner.vue'

export default {
  title: 'spinner',
  components: {
    spinner
  }
}

const defaultView = () => {
  return {
    components: {
      spinner
    },
    template: `
      <spinner />
    `
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}
