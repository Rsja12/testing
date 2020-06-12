import React from 'react'
import { shallow } from 'enzyme'

import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

let wrapper;

beforeEach(() => {
    wrapper = shallow(<App />)
})

it('renders a comment box', () => {
    // .find method returns array of all instances of CommentBox
    //  we want to only have one instance
    expect( wrapper.find(CommentBox).length ).toEqual(1);
})

it('renders a comment list', () => {
    expect( wrapper.find(CommentList).length ).toEqual(1)
})