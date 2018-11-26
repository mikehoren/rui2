import React from 'react'
import Select, {
  EMPTY_MESSAGE,
} from './'
import { mount } from 'enzyme'

const options = [
  { name: 'Name1', value: 1, data: { v: '1' }},
  { name: 'Name2', value: 2, data: { v: 2 }},
  { name: 'Name3', value: 3, data: { v: '3' }}
]

describe('<Select />', () => {

  it('should render empty text', () => {
    const el = mount(<Select />)
    expect(el.text()).toEqual(EMPTY_MESSAGE)
  })

  it('should render with options', () => {
    const el = mount(<Select 
      options={ options }
    />)
    expect(el.find('option').length).toEqual(3)
    expect(el.find('span').text()).toEqual(EMPTY_MESSAGE)
  })

  it('should render with optinons and value', () => {
    const el = mount(<Select 
      options={ options }
      value={ 1 }
    />)
    expect(el.find('option').length).toEqual(3)
    expect(el.find('span').text()).toEqual(options[0].name)
  })

  it('should not render in an error state by default', () => {
    const el = mount(<Select />)
    expect(el.find('div').first().prop('className').indexOf('error') === -1).toEqual(true)
  })

  it('should render in an error state', () => {
    const el = mount(<Select error />)
    expect(el.find('div').first().prop('className').indexOf('error') > -1).toEqual(true)
  })

  it('should call onChange', () => {
    const m = jest.fn( e => e)
    const el = mount(<Select onChange={ m } />)
    expect(m.mock.calls.length).toEqual(0)
    el.find('select').simulate('change')
    expect(m.mock.calls.length).toEqual(1)
  })

  it('should call onClick', () => {
    const m = jest.fn( e => e)
    const el = mount(<Select onClick={ m } />)
    expect(m.mock.calls.length).toEqual(0)
    el.find('select').simulate('click')
    expect(m.mock.calls.length).toEqual(1)
  })

  it('should call onBlur', () => {
    const m = jest.fn( e => e)
    const el = mount(<Select onBlur={ m } />)
    expect(m.mock.calls.length).toEqual(0)
    el.find('select').simulate('blur')
    expect(m.mock.calls.length).toEqual(1)
  })

  it('should call onFocus', () => {
    const m = jest.fn( e => e)
    const el = mount(<Select onFocus={ m } />)
    expect(m.mock.calls.length).toEqual(0)
    el.find('select').simulate('focus')
    expect(m.mock.calls.length).toEqual(1)
  })
})