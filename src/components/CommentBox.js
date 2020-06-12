import React, { Component } from 'react'

export class CommentBox extends Component {
    render() {
        return (
            <form>
                <h4>Add A Comment</h4>
                <textarea />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }
}

export default CommentBox
