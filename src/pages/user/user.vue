<template>
    <div class="wrapper">
      <div class="header">
        <topline>
          <template #headline>
            <div class="headline">
              <div class="logo">
                <icon name="logo" />
              </div>
              <div class="icon-list">
                <div class="icon"><icon name="home" @click="$router.push({ name: 'feeds' })" /></div>
                <div class="icon"><myUser :avatar="user?.avatar_url" /></div>
                <div class="icon"><icon name="exit" @click="exit"/></div>
                </div>
            </div>
            </template>
        </topline>
      </div>
      <div class="container">
        <div class="user">
          <div class="my-profile">
            <h2 class="title">My profile</h2>
            <profile
              v-if="user && starred && repos"
              :avatar="user.avatar_url"
              :login="user.login"
              :username="user.name"
              :repos="repos.length"
              :starred="starred.length"
            />
          </div>
          <div class="content">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
// import { mapActions, mapState } from 'vuex'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import { topline } from '../../components/topline'
import { icon } from '../../icons'
import { myUser } from '../../components/myUser'
import { profile } from '../../components/profile'
export default {
  name: 'user',
  components: {
    topline,
    icon,
    myUser,
    profile
  },
  setup () {
    const { state, dispatch } = useStore()

    const user = computed(() => state.auth.user)
    const starred = computed(() => state.starred.starred)
    const repos = computed(() => state.user.repos)

    onMounted(() => {
      if (user.value === null) {
        dispatch('auth/getUser')
      }
      if (starred.value === null) {
        dispatch('starred/getStarred')
      }
      if (repos.value === null) {
        dispatch('user/getRepos')
      }
    })

    return {
      user,
      starred,
      repos
    }
  }

}
</script>
  <style src="./user.scss" lang="scss" scoped></style>
