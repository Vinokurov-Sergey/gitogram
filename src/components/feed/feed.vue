<template>
    <div class="c-feed">
                  <post-author
                      :avatar="avatar"
                      :name="name" />
                    <repositoryGit>
                      <template #repositoryGit>
                        <post-item
                          :head="head"
                          :text="text"
                      />
                        <repository-rating
                          :stars="stars"
                          :forks="forks" />
                      </template>
                    </repositoryGit>
                    <toggler @onToggle="toggle" />
        <div class="comments" v-if="shown">
            <ul class="comments-list">
                <li class="comments-item" v-for="issue in issues" :key="issue.id">
                      <comment :issue="issue" />
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
// import posts from './posts.json'
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
  props: {
    name: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    head: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    stars: {
      type: Number,
      required: true
    },
    forks: {
      type: Number,
      required: true
    },
    issues: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      shown: false
    }
  },
  emits: ['loadIssues'],
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
      if (isOpened && this.issues.length === 0) {
        this.$emit('loadIssues')
      // }
      }
    }
  }
}
</script>

<style scoped>
.c-feed {
    width: 979px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: left;
}
</style>
