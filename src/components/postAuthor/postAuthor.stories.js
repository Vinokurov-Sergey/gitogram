// import { template } from '@babel/core'
import postAuthor from './postAuthor.vue'
export default {
  title: 'postAuthor',
  components: { postAuthor }
}

export const DefaultView = () => ({
  components: { postAuthor },
  template: `
    <post-author
      :avatar="'https://us.123rf.com/450wm/yupiramos/yupiramos1805/yupiramos180511470/101189243-young-man-avatar-character-vector-illustration-design-.jpg?ver=6'"
      :name="'joshua_l'" />
    `
})

DefaultView.story = {
  name: 'Стандартный вид'
}
