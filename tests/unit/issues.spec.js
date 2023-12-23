import { feed } from '@/components/feed'
import { mount } from '@vue/test-utils'

describe('issues in feed', () => {
  it('Проверка выполнения запроса данных по клику', async () => {
    const wrapper = mount(feed, {
      propsData: {
        issues: []
      }
    })

    await wrapper.find('.button').trigger('click')

    expect(wrapper.emitted().loadIssues.length).toBe(1)
  })

  it('Отрисовка правильного количества элементов', async () => {
    const issue = {
      body: 'text',
      user: {
        login: 'author'
      }
    }

    const wrapper = mount(feed, {
      propsData: {
        issues: Array.from({ length: 3 }).map(() => issue)
      }
    })

    expect(wrapper.find('.comments-list').exists()).toBe(false)

    await wrapper.find('.button').trigger('click')

    expect(wrapper.findAll('.comments-item').length).toBe(3)
  })

  it('Проверка отсутствия запроса данных при повторном клике', async () => {
    const issue = {
      body: 'text',
      user: {
        login: 'author'
      }
    }

    const wrapper = mount(feed, {
      propsData: {
        issues: Array.from({ length: 3 }).map(() => issue)
      }
    })

    await wrapper.find('.button').trigger('click')

    expect(wrapper.emitted().loadIssues).toBeUndefined()
  })
})
