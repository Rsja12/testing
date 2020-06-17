import React from 'react'
import { Route } from 'react-router-dom'

import CommentList from 'components/CommentList'
import CommentBox from 'components/CommentBox'

const App = () => {
    return (
        <div>
            <Route exact path='/' component={CommentBox} />
            <Route exact path='/posts' component={CommentList}/>
        </div>
    )
}

export default App
