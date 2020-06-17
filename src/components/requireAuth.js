import React, { Component } from 'react'
import { connect } from 'react-redux'

export default (ChildComponent) => {

    class ComposedComponent extends Component {

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

        render() {
            return(
                // takes any props that were passed to ComposedComponent and passes them down to ChildComponent
                <ChildComponent {...this.props}/>
            )
        }

    }

    const mapStateToProps = state => ({
        auth: state.auth
    })

    return connect(mapStateToProps)(ComposedComponent)
}
