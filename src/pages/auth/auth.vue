<template>
    <div class="auth">
      <div class="container container_small">
        <div class="auth-wrapper">
          <div class="auth-greet">
            <div class="auth-logo">
              <icon name="logo" />
            </div>
            <div class="auth-promo">
              More than just one repository. This is our digital world.
            </div>
            <div class="auth-button">
              <button @click="checkUser">
                <slider-button theme="green">
                  <span class="btn-text">Authorize with github</span>
                  <span><icon name="github" /></span>
                </slider-button>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import { icon } from '../../icons'
import { sliderButton } from '../../components/SliderButton'
import { mapActions } from 'vuex'
export default {
  components: {
    icon,
    sliderButton
  },
  methods: {
    ...mapActions({
      checkUser: 'auth/checkUser',
      exchangeForToken: 'auth/exchangeForToken',
      getUser: 'auth/getUser'
    })
  },
  async created () {
    console.log('auth created')
    const code = new URLSearchParams(window.location.search).get('code')
    console.log('code = ', code)
    if (code !== null) {
      const token = await this.exchangeForToken(code)
      console.log('token', token)
      localStorage.setItem('token', token)
    } else {
      return
    }
    const user = await this.getUser()
    console.log('user = ', user)
    if (user) {
      this.$router.replace({ name: 'feeds' })
    }
  }
}
</script>
  <style src="./auth.scss" lang="scss" scoped></style>
