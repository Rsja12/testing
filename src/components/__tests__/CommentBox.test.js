import React from 'react'
import { mount } from 'enzyme'

import Root from 'Root'
import CommentBox from 'components/CommentBox'

let wrapper

beforeEach(() => {
    wrapper = mount(
        <Root>
            <CommentBox />
        </Root>
    )
})

afterEach(() => {
    wrapper.unmount()
})

it('has a textarea and a button', () => {
    expect( wrapper.find('textarea').length ).toEqual(1)
    expect( wrapper.find('button').length ).toEqual(1)
})

describe('The textarea', () => {

    beforeEach(() => {
        wrapper.find('textarea').simulate('change', {
            target: { value: 'comment' }
        })
        // we need .update() because setState is asynchronous
        wrapper.update()
    })

    it('has a textarea that users can type in', () => {
        expect(wrapper.find('textarea').prop('value')).toEqual('comment')
    })
    
    it('clears textarea on form submit', () => {
        wrapper.find('form').simulate('submit')
        wrapper.update()
        expect(wrapper.find('textarea').prop('value')).toEqual('')
    })

})