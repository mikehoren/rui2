import React from 'react'
import RadioGroup from './'
import { shallow } from 'enzyme'

const radios = [
  { label: 'Name1' },
  { label: 'Name2', checked: true },
  { label: 'Name3' }
]

function findRadio(node, idx) {
  return node.find('.test').at(idx).find('div').at(1)
}

describe('<RadioGroup />', () => {

  it('should render empty by default', () => {
    const el = shallow(<RadioGroup className="test" />)
    expect(el.find('.test').length).toEqual(0)
  })

  it('should render radio containers', () => {
    const el = shallow(<RadioGroup className="test" radios={ radios }/>)
    expect(el.find('.test').length).toEqual(3)
  })

  it('should render with radio selected', () => {
    const el = shallow(<RadioGroup className="test" radios={ radios }/>)
    expect(findRadio(el, 0).prop('className').indexOf('checked') === -1).toEqual(true)
    expect(findRadio(el, 1).prop('className').indexOf('checked') > -1).toEqual(true)
    expect(findRadio(el, 2).prop('className').indexOf('checked') === -1).toEqual(true)
  })

  it('should render with radio disabled', () => {
    const el = shallow(<RadioGroup className="test" radios={[
      { label: 'Name1' },
      { label: 'Name2' },
      { label: 'Name3', disabled: true }
    ]}/>)
    expect(el.find('.test').at(0).prop('className').indexOf('disabled') === -1).toEqual(true)
    expect(el.find('.test').at(1).prop('className').indexOf('disabled') === -1).toEqual(true)
    expect(el.find('.test').at(2).prop('className').indexOf('disabled') > -1).toEqual(true)
  })

  it('calls onChange on click', () => {
    const m = jest.fn( e => e)
    const el = shallow(<RadioGroup className="test" radios={ radios } onChange={ m } />)
    expect(m.mock.calls.length).toEqual(0)
    el.find('.test').at(2).simulate('click')
    expect(m.mock.calls.length).toEqual(1)
  })

})