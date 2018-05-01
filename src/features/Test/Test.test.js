import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Test from './Test'

configure({ adapter: new Adapter() })

describe('<Test />', () => {
  it('should render h2 element', () => {
    const wrapper = shallow(<Test />)
    expect(wrapper.find('div')).toHaveLength(1)
  })
})
