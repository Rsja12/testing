import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios'

import Root from 'Root'
import App from 'components/App'

beforeEach(() => {
    moxios.install()
    moxios.stubRequest('https://jsonplaceholder.typicode.com/posts', {
        status: 200,
        response: [{ title: 'Fetched 1' }, { title: 'Fetched 2' }]
    })
})

afterEach(() => {
    moxios.uninstall()
})

it('can fetch a list of comments and display them', (done) => {

    const wrapper = mount(
        <Root>
            <App />
        </Root>
    )

    wrapper.find('.fetch-comments').simulate('click')

    // allow moxios to kick in
    moxios.wait(() => {
        wrapper.update();

        expect(wrapper.find('li').length).toEqual(2);

        done();
        
        wrapper.unmount();
    })

})