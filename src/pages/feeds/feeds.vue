<template>
    <div class="topline">
        <topline>
          <template #headline>
            <div class="headline">
              <div class="logo">
                <icon name="logo" />
              </div>
              <div class="icon-list">
                <div class="icon"><icon name="home" /></div>
                <!-- <div class="icon"><img :src="this.user.avatar_url"></div> -->
                <div class="icon"><myUser :avatar="user?.avatar_url" /></div>
                <!-- <div class="icon"><icon name="user" /></div> -->
                <div class="icon"><icon name="exit" @click="exit"/></div>
                </div>
            </div>
            </template>
            <template #content>
              <ul class="stories">
                <!-- <li class="stories-item" v-for="story in data" :key="story.id"> -->
                  <!-- <li class="stories-item" v-for="{id, owner, name} in getUnstarredOnly" :key="id"> -->
                  <li class="stories-item" v-for="story in getUnstarredOnly" :key="story.id">
                  <story-user-item
                      :avatar="story.owner?.avatar_url"
                      :username="story.owner?.login"
                      @thisReadme="$router.push({
                        name: 'stories',
                        params: {
                          initialSlide: story.id
                        }
                      })"
                  />
                  <!-- <story-user-item
                      :avatar="owner"
                      :username="name"
                      @thisReadme="$router.push({
                        name: 'stories',
                        params: {
                          initialSlide: story.id
                        }
                      })"
                  /> -->
                </li>
              </ul>
            </template>
        </topline>
    </div>
    <ul class="feeds">
      <li class="feeds__item" v-for="item in starred" :key="item.id">
        <feed :avatar="item.owner.avatar_url" :name="item.owner.login"
        :head="item.name"
        :text="item.description"
        :stars="item.stargazers_count"
        :forks="item.forks"
        :issues="item.issues ? item.issues : []"
        @loadIssues="getIssues({
                id: item.id,
                owner: item.owner.login,
                repo: item.name })"></feed>
      </li>
    </ul>
</template>

<script>
import { topline } from '../../components/topline'
import { icon } from '../../icons'
import { myUser } from '../../components/myUser'
import { storyUserItem } from '../../components/storyUserItem'
import stories from './data.json'
import { feed } from '../../components/feed'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'feeds',
  components: {
    topline,
    icon,
    storyUserItem,
    feed,
    myUser
  },
  data () {
    return {
      stories
    }
  },
  computed: {
    // ...mapState(['data']),
    ...mapState({
      data: state => state.trendings.data,
      user: state => state.auth.user,
      starred: state => state.starred.starred
    }),
    ...mapGetters(['getUnstarredOnly'])
    // ...mapGetters({ getUnstarredOnly: state => state.index.getUnstarredOnly })
  },
  methods: {
    // ...mapActions(['getData']),
    ...mapActions({
      getData: 'trendings/getData',
      getIssues: 'starred/getIssues',
      // getIssues: 'trendings/getIssues',
      getUser: 'auth/getUser',
      getStarred: 'starred/getStarred'
    }),
    exit () {
      localStorage.removeItem('token')
      this.$router.replace({ name: 'auth' })
      window.location.reload()
    }
  },
  async created () {
    if (this.user === null) {
      await this.getUser()
    }
  },
  async mounted () {
    if (this.starred === null) {
      await this.getStarred()
    }
    // await this.getData()
    if (this.data.length === 0) {
      await this.getData()
    }
  }
}

</script>

<!-- <style lang="scss" scoped>
  .icon {
    width: 24px;
  }
  style
</style> -->
<style scoped>
.headline {
  display: flex;
  justify-content: space-between;
}

.icon-list {
  display: flex;
}

.icon {
  width: 32px;
  height: 32px;
  margin-right: 2px;
  }

.logo {
  width: 174px;
  height: 35px;
}

.stories {
    display: flex;
    justify-content: space-between;
}
</style>
