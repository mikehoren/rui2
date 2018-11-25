import React from 'react'
import Modal from './'

import { mount } from 'enzyme'

describe('<Modal />', () => {

  it('should not render title by default', () => {
    const el = mount(<Modal></Modal>)
    expect(el.text()).toEqual('')
  })

  it('should render title', () => {
    const el = mount(<Modal title="test"></Modal>)
    expect(el.text()).toEqual('test')
  })

  it('should render children', () => {
    const el = mount(<Modal><div className="test">abc</div></Modal>)
    expect(el.find('.test').text()).toEqual('abc')
  })

  it('should not be open by default', () => {
    const el = mount(<Modal></Modal>)
    expect(el.find('div').first().props().className.indexOf('open') === -1).toEqual(true)
  })

  it('should should render open', () => {
    const el = mount(<Modal open ></Modal>)
    expect(el.find('div').first().props().className.indexOf('open') > -1).toEqual(true)
  })

})