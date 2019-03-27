import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import '../src/css/reset.css'
import '../src/css/styles.css'
import '../src/css/colors.css'

setOptions({
  name: 'elie.tech Storybook',
  downPanelInRight: true,
})

// Stories loader
const req = require.context('../src', true, /.stories.[jt]sx?$/)
function loadStories() {
  req.keys().forEach(req)
}

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ''
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action('NavigateTo:')(pathname)
}

// Initialize react-storybook
configure(loadStories, module)

addDecorator(withA11y)
addDecorator(withKnobs)
