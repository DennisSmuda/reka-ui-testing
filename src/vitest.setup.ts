import { expect, vi } from 'vitest'

import * as matchers from 'vitest-axe/matchers'

expect.extend(matchers)

const { getComputedStyle } = window

window.getComputedStyle = elt => getComputedStyle(elt)

HTMLCanvasElement.prototype.getContext = vi.fn()