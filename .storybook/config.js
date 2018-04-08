import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

function loadStories() {
  require('../src/stories')
}

// const req = require.context('../src/stories', true, /\.stories\.js$/)

// function loadStories() {
//   req.keys().forEach(filename => req(filename))
// }

setOptions({
  name: 'Supakorn Thongtra',
  addonPanelInRight: true,
  sidebarAnimations: false
})

configure(loadStories, module)
