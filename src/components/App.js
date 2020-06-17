import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import CommentList from 'components/CommentList'
import CommentBox from 'components/CommentBox'
import { changeAuth } from 'actions'

class App extends Component {

    renderBtn() {
        if (this.props.auth) {
            return(
                <button onClick={() => this.props.changeAuth(false) }>
                    Sign Out
                </button>
            )
        }

        return(
            <button onClick={() => this.props.changeAuth(true) }>
                Sign In
            </button>
        )
    }

    renderHeader() {
        return (
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/posts'>Post Comment</Link>
                </li>
                <li>
                    { this.renderBtn() }
                </li>
            </ul>
        )
    }

    render(){
        return (
            <div>
                {this.renderHeader()}
                <Route exact path='/' component={CommentList} />
                <Route exact path='/posts' component={CommentBox}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { changeAuth })(App)
