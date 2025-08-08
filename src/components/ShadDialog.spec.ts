import type { DOMWrapper, VueWrapper } from '@vue/test-utils'
import { fireEvent } from '@testing-library/vue'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { defineComponent, nextTick } from 'vue'
import { DialogClose, DialogContent, DialogOverlay, Dialog as DialogRoot, DialogTitle, DialogTrigger, DialogDescription } from '../components/ui/dialog'

const OPEN_TEXT = 'Open'
const CLOSE_TEXT = 'Close'
const TITLE_TEXT = 'Title'
const DESCRIPTION_TEXT = 'Description'

const DialogTest = defineComponent({
  components: { DialogRoot, DialogTrigger, DialogOverlay, DialogContent, DialogClose, DialogTitle, DialogDescription },
  template: `<DialogRoot >
  <DialogTrigger>${OPEN_TEXT}</DialogTrigger>
  <DialogOverlay />
  <DialogContent>
    <DialogTitle>${TITLE_TEXT}</DialogTitle>
    <DialogDescription>${DESCRIPTION_TEXT}</DialogDescription>
    <DialogClose data-testid="close-button">${CLOSE_TEXT}</DialogClose>
  </DialogContent>
</DialogRoot>`,
})

describe('given a default Dialog', () => {
  let wrapper: VueWrapper<InstanceType<typeof DialogTest>>
  let trigger: DOMWrapper<HTMLElement>
  let closeButton: DOMWrapper<HTMLElement>

  beforeEach(() => {
    document.body.innerHTML = ''
    wrapper = mount(DialogTest, { attachTo: document.body })
    trigger = wrapper.find('button')
  })

  it('should render', () => {
    expect(wrapper.html()).toContain(OPEN_TEXT)
  })


  describe('after clicking the trigger (testing-library)', () => {
    beforeEach(async () => {
      await trigger.trigger('click')
      await nextTick()
      closeButton = wrapper.find('button[data-testid="close-button"]')
    })

    it('should open the dialog', () => {
      expect(document.body.innerHTML).toContain(TITLE_TEXT)
      expect(document.body.innerHTML).toContain(DESCRIPTION_TEXT)
    })
  })

  describe('after clicking the trigger (vue-test-utils)', () => {
    beforeEach(async () => {
      fireEvent.click(trigger.element)
      await nextTick()
    })

    it('should open the dialog', () => {
      expect(document.body.innerHTML).toContain(TITLE_TEXT)
      expect(document.body.innerHTML).toContain(DESCRIPTION_TEXT)
    })
  })
})
