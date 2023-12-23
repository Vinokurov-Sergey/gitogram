import { profile } from './'

export default {
  title: 'profile',
  components: {
    profile
  }
}

const defaultView = () => {
  return {
    components: {
      profile
    },
    template: `
        <profile
          avatar='https://gravatar.com/avatar/e87da1ee03324417f3d9757ea23cb4e7?s=400&d=robohash&r=x'
          login='Robot'
          username='Robot Name'
          repos='10'
          starred='15'
        />
      `
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}
