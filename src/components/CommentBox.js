import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'

export class CommentBox extends Component {

    state = {
        comment: ''
    }

    shouldNavigateAway() {
        if(!this.props.auth){
            // this.props.history comes from react router
            this.props.history.push('/')
        }
    }

    componentDidMount() {
        this.shouldNavigateAway()
    }
    
    // gets called when component receives new props (gets updated)
    componentDidUpdate() {
        this.shouldNavigateAway()
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
                <button 
                    className='fetch-comments'
                    onClick={ this.props.fetchComments }>
                        Fetch Comments
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

// pass in actions obj that holds all of the creators imported with * at top of file
export default connect(mapStateToProps, actions)(CommentBox)
