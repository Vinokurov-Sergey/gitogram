<template>
    <div class="c-feed">
          <ul class="posts">
                <li class="posts-item" v-for="post in posts" :key="post.id">
                  <post-author
                      :avatar="post.author.avatar"
                      :name="post.author.name" />
                    <repositoryGit>
                      <template #repositoryGit>
                        <post-item
                          :head="post.head"
                          :text="post.text"
                      />
                        <repository-rating
                          :stars="post.stars"
                          :forks="post.forks" />
                      </template>
                    </repositoryGit>
              </li>
            </ul>
        <toggler @onToggle="toggle" />
        <div class="comments" v-if="shown">
            <ul class="comments-list">
                <li class="comments-item" v-for="n in 5" :key="n">
                    <comment text="text" username="Josh" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { repositoryGit } from '../repositoryGit'
import { postAuthor } from '../postAuthor'
import { postItem } from '../postItem'
import { repositoryRating } from '../repositoryRating'
import posts from './posts.json'
import { comment } from '../comment'
import { toggler } from '../toggler'

export default {
  name: 'feed-item',
  components: {
    repositoryGit,
    postAuthor,
    postItem,
    repositoryRating,
    comment,
    toggler
  },
  data () {
    return {
      shown: false, posts
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style lang="scss" src="./feed.scss" scoped></style>
