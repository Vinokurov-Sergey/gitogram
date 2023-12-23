<template>
    <div class="head">
      <h2 class="title">Repositories</h2>
      <div class="count" v-if="repos">{{ repos.length }}</div>
    </div>
    <div class="body">
      <ul class="repos-list">
        <li class="repos-item" v-for="item in repos" :key="item.id">
          <repositoryGit>
                      <template #repositoryGit>
                        <post-item
                          :head="item.name"
                          :text="item.description"
                      />
                        <repository-rating
                          :stars="item.stargazers_count"
                          :forks="item.forks" />
                      </template>
          </repositoryGit>
        </li>
      </ul>
    </div>
  </template>

<script>
// import { mapState, mapActions } from 'vuex'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { repositoryGit } from '../../components/repositoryGit'
import { repositoryRating } from '../../components/repositoryRating'
import { postItem } from '../../components/postItem'
export default {
  name: 'repos',
  components: { repositoryGit, repositoryRating, postItem },
  setup () {
    const { state } = useStore()

    const repos = computed(() => state.user.repos)

    return {
      repos
    }
  }
}
</script>
  <style src="./repos.scss" lang="scss" scoped></style>
