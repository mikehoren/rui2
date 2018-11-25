import React from 'react'
import Textarea from './'
import { shallow, mount } from 'enzyme'

describe('<Textarea />', () => {

  it('should render with value', () => {
    const el = shallow(<Textarea value="test" onChange={ () => null } />)
    expect(el.find('textarea').prop('value')).toEqual('test')
  })

  it('should render with error state', () => {
    const el = shallow(<Textarea error />)
    expect(el.find('textarea').prop('className').indexOf('error') > -1).toEqual(true)
  })

  it('should call onChange when changed', () => {
    const m = jest.fn( e => e)
    const el = mount(<Textarea onChange={ m } />)
    expect(m.mock.calls.length).toEqual(0)
    el.find('textarea').simulate('change')
    expect(m.mock.calls.length).toEqual(1)
  })

})