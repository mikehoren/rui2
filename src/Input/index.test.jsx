import React from 'react'
import Input from './'
import { mount } from 'enzyme'

describe('<Input />', () => {

  describe('Statuses', () => {

    it('does not render statuses by default', () => {
      const el = mount(<Input />)
      expect(el.find('DoneIcon').length).toEqual(0)
      expect(el.find('ErrorIcon').length).toEqual(0)
      expect(el.find('LoadingIcon').length).toEqual(0)
    })

    it('renders success status', () => {
      const el = mount(<Input success />)
      expect(el.find('DoneIcon').length).toEqual(1)
      expect(el.find('ErrorIcon').length).toEqual(0)
      expect(el.find('LoadingIcon').length).toEqual(0)
    })

    it('renders error status', () => {
      const el = mount(<Input error />)
      expect(el.find('ErrorIcon').length).toEqual(1)
      expect(el.find('DoneIcon').length).toEqual(0)
      expect(el.find('LoadingIcon').length).toEqual(0)
    })

    it('renders loading status', () => {
      const el = mount(<Input loading />)
      expect(el.find('LoadingIcon').length).toEqual(1)
      expect(el.find('DoneIcon').length).toEqual(0)
      expect(el.find('ErrorIcon').length).toEqual(0)
    })

  })

  describe('props', () => {

    it('renders value', () => {
      const el = mount(<Input value="Test" onChange={ () => null } />)
      expect(el.find('input').props().value).toEqual('Test')
    })

    it('calls onChange on input change', () => {
      const m = jest.fn( e => e)
      const el = mount(<Input onChange={ m } />)
      expect(m.mock.calls.length).toEqual(0)
      el.find('input').simulate('change')
      expect(m.mock.calls.length).toEqual(1)
    })

    it('calls onClick on input click', () => {
      const m = jest.fn( e => e)
      const el = mount(<Input onClick={ m } />)
      expect(m.mock.calls.length).toEqual(0)
      el.find('input').simulate('click')
      expect(m.mock.calls.length).toEqual(1)
    })

    it('calls onFocus on input focus', () => {
      const m = jest.fn( e => e)
      const el = mount(<Input onFocus={ m } />)
      expect(m.mock.calls.length).toEqual(0)
      el.find('input').simulate('focus')
      expect(m.mock.calls.length).toEqual(1)
    })

    it('calls onBlur on input blur', () => {
      const m = jest.fn( e => e)
      const el = mount(<Input onBlur={ m } />)
      expect(m.mock.calls.length).toEqual(0)
      el.find('input').simulate('blur')
      expect(m.mock.calls.length).toEqual(1)
    })

  })

})