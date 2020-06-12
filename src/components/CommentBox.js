import React, { Component } from 'react'

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

        // TODO - Call action creator to post comment

        this.setState({
            comment: ''
        })
    }

    render() {
        return (
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
        )
    }
}

export default CommentBox
