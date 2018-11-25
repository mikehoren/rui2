import React from 'react'
import Checkbox from './'
import { mount } from 'enzyme'

describe('<Checkbox />', () => {

  it('should default to unchecked', () => {
    const el = mount(<Checkbox />)
    expect(el.find('DoneIcon').length).toEqual(0)
  })

  it('should render checked', () => {
    const el = mount(<Checkbox checked />)
    expect(el.find('DoneIcon').length).toEqual(1)
  })

  it('should call onChange when clicked', () => {
    const m = jest.fn( e => e)
    const el = mount(<Checkbox onChange={ m } />)
    expect(m.mock.calls.length).toEqual(0)
    el.find('div').simulate('click')
    expect(m.mock.calls.length).toEqual(1)
  })

})