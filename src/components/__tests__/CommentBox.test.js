import React from 'react'
import { mount } from 'enzyme'

import CommentBox from 'components/CommentBox'

let wrapper

beforeEach(() => {
    wrapper = mount(<CommentBox />)
})

afterEach(() => {
    wrapper.unmount()
})

it('has a textarea and a button', () => {
    expect( wrapper.find('textarea').length ).toEqual(1)
    expect( wrapper.find('button').length ).toEqual(1)
})

it('has a textarea that users can type in', () => {
    wrapper.find('textarea').simulate('change', {
        target: { value: 'new comment' }
    })
    // we need it because setState is asynchronous
    wrapper.update()

    expect(wrapper.find('textarea').prop('value')).toEqual('new comment')
})

it('clears textarea on form submit', () => {
    wrapper.find('textarea').simulate('change', {
        target: { value: 'comment' }
    })
    wrapper.update()
    expect(wrapper.find('textarea').prop('value')).toEqual('comment')
    
    wrapper.find('form').simulate('submit')
    wrapper.update()
    expect(wrapper.find('textarea').prop('value')).toEqual('')
})