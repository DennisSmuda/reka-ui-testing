import type { DOMWrapper, VueWrapper } from '@vue/test-utils'
import { findByText, fireEvent } from '@testing-library/vue'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { defineComponent, nextTick } from 'vue'
import { DialogClose, DialogContent, DialogOverlay, DialogRoot, DialogTitle, DialogTrigger } from 'reka-ui'

const OPEN_TEXT = 'Open'
const CLOSE_TEXT = 'Close'
const TITLE_TEXT = 'Title'

const DialogTest = defineComponent({
  components: { DialogRoot, DialogTrigger, DialogOverlay, DialogContent, DialogClose, DialogTitle },
  template: `<DialogRoot >
  <DialogTrigger>${OPEN_TEXT}</DialogTrigger>
  <DialogOverlay />
  <DialogContent>
    <DialogTitle>${TITLE_TEXT}</DialogTitle>
    <DialogClose data-testid="close-button">${CLOSE_TEXT}</DialogClose>
  </DialogContent>
</DialogRoot>`,
})

describe('given a default Dialog', () => {
  let wrapper: VueWrapper<InstanceType<typeof DialogTest>>
  let trigger: DOMWrapper<HTMLElement>
  let closeButton: HTMLElement
  let closeButtonWrapper: DOMWrapper<HTMLElement>

  beforeEach(() => {
    document.body.innerHTML = ''
    wrapper = mount(DialogTest, { attachTo: document.body })
    trigger = wrapper.find('button')
  })

  it('should render', () => {
    expect(wrapper.html()).toContain(OPEN_TEXT)
  })


  describe('after clicking the trigger (testing-library', () => {
    beforeEach(async () => {
      fireEvent.click(trigger.element)
      closeButton = await findByText(document.body, CLOSE_TEXT)
    })

    it('should open the dialog', () => {
      expect(wrapper.html()).toContain(TITLE_TEXT)
      expect(wrapper.html()).toContain(CLOSE_TEXT)
      closeButtonWrapper = wrapper.find('button[data-testid="close-button"]')
      expect(closeButtonWrapper.exists()).toBe(true)
    })
  })

  describe('after clicking the trigger (vue-test-utils)', () => {
    beforeEach(async () => {
      await trigger.trigger('click')
      await nextTick()
    })

    it('should open the dialog', () => {
      expect(wrapper.html()).toContain(TITLE_TEXT)
      expect(wrapper.html()).toContain(CLOSE_TEXT)
    })
  })
})
