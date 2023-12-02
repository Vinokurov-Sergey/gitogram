import feed from './feed.vue'
import { repositoryGit } from '../repositoryGit'
import { postAuthor } from '../postAuthor'
import { postItem } from '../postItem'
import { repositoryRating } from '../repositoryRating'
import { comment } from '../comment'
import { toggler } from '../toggler'
export default {
  title: 'feed',
  components: { feed }

}

export const DefaultView = () => ({
  components: {
    feed,
    repositoryGit,
    postAuthor,
    postItem,
    repositoryRating,
    comment,
    toggler
  },

  template: `
  <feed />
    `
})

DefaultView.story = {
  name: 'Стандартный вид'
}
