import React from 'react'
import { shallow } from 'enzyme'

import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

it('renders a comment box', () => {
    const wrapper = shallow(<App />)

    // .find method returns array of all instances of CommentBox
    //  we want to only have one instance
    expect( wrapper.find(CommentBox).length ).toEqual(1);
})

it('renders a comment list', () => {
    const wrapper = shallow(<App />)
    expect( wrapper.find(CommentList).length ).toEqual(1)
})