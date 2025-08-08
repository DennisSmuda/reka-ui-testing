import type { DOMWrapper, VueWrapper } from '@vue/test-utils'
import type { Mock } from 'vitest'
import { findByText, fireEvent, render } from '@testing-library/vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { axe } from 'vitest-axe'
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
    <DialogClose>${CLOSE_TEXT}</DialogClose>
  </DialogContent>
</DialogRoot>`,
})

describe('given a default Dialog', () => {
  let wrapper: VueWrapper<InstanceType<typeof DialogTest>>
  let trigger: DOMWrapper<HTMLElement>
  let closeButton: HTMLElement

  beforeEach(() => {
    document.body.innerHTML = ''
    wrapper = mount(DialogTest, { attachTo: document.body })
    trigger = wrapper.find('button')
  })

  it('should render', () => {
    console.log(wrapper.html())
    console.log(document.body.innerHTML)
    expect(wrapper.html()).toContain(OPEN_TEXT)
  })


  describe('after clicking the trigger', () => {
    beforeEach(async () => {
      fireEvent.click(trigger.element)
      closeButton = await findByText(document.body, CLOSE_TEXT)
    })

    it('should open the dialog', () => {
      expect(wrapper.html()).toContain(TITLE_TEXT)
      console.log(wrapper.html())
    })
  })

  // it('should open when trigger is clicked', async () => {
  //   await trigger.trigger('click')
  //   expect(wrapper.html()).toContain(TITLE_TEXT)
  // })
})
