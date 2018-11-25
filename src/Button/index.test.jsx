import React from 'react'
import Button, {
  TYPE_NORMAL,
  TYPE_SECONDARY,
  TYPE_DANGER,
} from './'
import SecondaryButton from './SecondaryButton'
import DangerButton from './DangerButton'
import { shallow, mount } from 'enzyme'

describe('<Button />', () => {

  it('should render it\'s text children', () => {
    const el = shallow(<Button>Test</Button>)
    expect(el.text()).toEqual('Test')
  })

  it('should use normal styles by default', () => {
    const el = shallow(<Button>Test</Button>)
    const i = el.instance()
    expect(i.props.type).toEqual(TYPE_NORMAL)
  })

  it('should use secondary styles', () => {
    const el = shallow(<Button type={ TYPE_SECONDARY }>Test</Button>)
    const i = el.instance()
    expect(i.props.type).toEqual(TYPE_SECONDARY)
  })

  it('should use danger styles', () => {
    const el = shallow(<Button type={ TYPE_DANGER }>Test</Button>)
    const i = el.instance()
    expect(i.props.type).toEqual(TYPE_DANGER)
  })

  it('should call onClick when the button is clicked', () => {
    const m = jest.fn( e => e)
    const el = shallow(<Button onClick={ m }>Test</Button>)
    expect(m.mock.calls.length).toEqual(0)
    el.find('button').simulate('click')
    expect(m.mock.calls.length).toEqual(1)
  })

  describe('<SecondaryButton />', () => {

    it('should render with secondary type', () => {
      const el = mount(<SecondaryButton />)
      const btn = el.find('Button')
      expect(btn.props().type).toEqual(TYPE_SECONDARY)
    })

  })

  describe('<DangerButton />', () => {

    it('should render with danger type', () => {
      const el = mount(<DangerButton />)
      const btn = el.find('Button')
      expect(btn.props().type).toEqual(TYPE_DANGER)
    })

  })

})