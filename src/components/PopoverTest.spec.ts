import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PopoverTest from './PopoverTest.vue'

describe('PopoverTest', () => {
  it.skip('should render', () => {
    const wrapper = mount(PopoverTest)
    expect(wrapper.html()).toContain('PopoverTest')
  })
})