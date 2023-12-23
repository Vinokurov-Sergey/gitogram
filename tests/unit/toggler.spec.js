import { shallowMount } from '@vue/test-utils'
import { toggler } from '@/components/toggler'

describe('toggler', () => {
  it('Изменение надписи при клике', async () => {
    const wrapper = shallowMount(toggler)

    expect(wrapper.find('.text').text()).toBe('Show issues')
    await wrapper.find('.button').trigger('click')
    expect(wrapper.find('.text').text()).toBe('Hide issues')
  })
})
