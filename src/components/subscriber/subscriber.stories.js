import { subscriber } from './'

export default {
  title: 'subscriber',
  components: {
    subscriber
  }
}

const defaultView = () => {
  return {
    components: {
      subscriber
    },
    template: `
      <subscriber
        avatar="https://gravatar.com/avatar/e87da1ee03324417f3d9757ea23cb4e7?s=400&d=robohash&r=x"
        title="Repository"
        type="account type"
        id="41848759"
      />
    `
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}
