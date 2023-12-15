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
                <div class="icon"><icon name="user" /></div>
                <div class="icon"><icon name="exit" @click="exit"/></div>
                </div>
            </div>
            </template>
            <template #content>
              <ul class="stories">
                <li class="stories-item" v-for="story in data" :key="story.id">
                  <story-user-item
                      :avatar="story.owner.avatar_url"
                      :username="story.owner.login"
                      @thisReadme="$router.push({
                        name: 'stories',
                        params: {
                          initialSlide: story.id
                        }
                      })"
                  />
                </li>
              </ul>
            </template>
        </topline>
    </div>
        <feed></feed>
</template>

<script>
import { topline } from '../../components/topline'
import { icon } from '../../icons'
import { storyUserItem } from '../../components/storyUserItem'
import stories from './data.json'
import { feed } from '../../components/feed'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'feeds',
  components: {
    topline,
    icon,
    storyUserItem,
    feed
  },
  data () {
    return {
      stories
    }
  },
  computed: {
    ...mapState(['data'])
  },
  methods: {
    ...mapActions(['getData']),
    exit () {
      localStorage.removeItem('token')
      this.$router.replace({ name: 'auth' })
      window.location.reload()
    }
  },
  mounted () {
    this.getData()
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
