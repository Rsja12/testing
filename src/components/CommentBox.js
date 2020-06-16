import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'

export class CommentBox extends Component {

    state = {
        comment: ''
    }

    handleChange = e => {
        this.setState({
            comment: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        
        this.props.saveComment( this.state.comment )
        this.setState({
            comment: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add A Comment</h4>
                    <textarea
                        value={this.state.comment}
                        onChange={this.handleChange}
                    />
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button onClick={ this.props.fetchComments }>Fetch Comments</button>
            </div>
        )
    }
}

// pass in actions obj that holds all of the creators imported with * at top of file
export default connect(null, actions)(CommentBox)
