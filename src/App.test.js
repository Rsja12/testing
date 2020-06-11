// create-react-app includes Jest lib
// we run the script with `npm run start`
// Jest finds all files ending in .test.js and executes tests inside of them
// Jest prints out results of tests to the terminal
// Jest waits for a file to change, then runs all tests again


import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

it('Renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)

    expect(div.innerHTML).toContain('Hi there!')

    ReactDOM.unmountComponentAtNode(div)
})


