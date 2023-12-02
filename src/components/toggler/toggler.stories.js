import toggler from './toggler.vue'
export default {
  title: 'toggler',
  components: { toggler }
}

export const DefaultView = () => ({
  components: { toggler },
  template: `
  <toggler />
    `
})

DefaultView.story = {
  name: 'Стандартный вид'
}
