<template>
    <div class="c-feed">
          <ul class="posts">
                <li class="posts-item" v-for="item in data" :key="item.id">
                  <post-author
                      :avatar="item.owner.avatar_url"
                      :name="item.owner.login" />
                    <repositoryGit>
                      <template #repositoryGit>
                        <post-item
                          :head="item.name"
                          :text="item.description"
                      />
                        <repository-rating
                          :stars="item.stargazers_count"
                          :forks="item.forks_count" />
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
// import * as api from '../../api'
import { repositoryGit } from '../repositoryGit'
import { postAuthor } from '../postAuthor'
import { postItem } from '../postItem'
import { repositoryRating } from '../repositoryRating'
import posts from './posts.json'
import { comment } from '../comment'
import { toggler } from '../toggler'
import { mapState, mapActions } from 'vuex'

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
      shown: false, posts, items: []
    }
  },
  computed: {
    ...mapState(['data'])
  },
  methods: {
    ...mapActions(['getData']),
    toggle (isOpened) {
      this.shown = isOpened
    }
  },
  mounted () {
    this.getData()
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
