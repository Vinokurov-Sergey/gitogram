import feeds from './feeds.vue'
import { topline } from '../../components/topline'
import { icon } from '../../icons'
import { storyUserItem } from '../../components/storyUserItem'
import { feed } from '../../components/feed'

export default {
  title: 'feeds',
  components: {
    feeds,
    topline,
    icon,
    storyUserItem,
    feed
  }
}

export const DefaultView = (args) => ({
  components: { feeds },
  template: `
  <feeds />
    `
})

DefaultView.story = {
  name: 'Стандартный вид'
}
