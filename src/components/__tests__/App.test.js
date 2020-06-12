import React from 'react'
import { shallow } from 'enzyme'

import App from '../App'
import CommentBox from '../CommentBox'

it('renders a comment box', () => {
    const wrapper = shallow(<App />)

    // .find method returns array of all instances of CommentBox
    //  we want to only have one instance
    expect( wrapper.find(CommentBox).length ).toEqual(1);
})