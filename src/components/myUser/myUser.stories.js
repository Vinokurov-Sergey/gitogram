import { myUser } from './'

export default {
  title: 'myUser',
  components: {
    myUser
  }
}

const defaultView = () => {
  return {
    components: {
      myUser
    },
    template: `
        <myUser
            avatar="https://gravatar.com/avatar/e87da1ee03324417f3d9757ea23cb4e7?s=400&d=robohash&r=x"
        />
      `
  }
}

const profileView = () => {
  return {
    components: {
      myUser
    },
    template: `
      <myUser
        avatar="https://gravatar.com/avatar/e87da1ee03324417f3d9757ea23cb4e7?s=400&d=robohash&r=x"
        type="profile"
      />
    `
  }
}

export { defaultView }
export { profileView }

defaultView.story = {
  name: 'Стандартный вид'
}

profileView.story = {
  name: 'На странице профиля'
}
