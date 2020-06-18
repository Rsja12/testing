// Gets called with an object that has a couple of different properties
// We only care about the dispatch property
// export default function({ dispatch }) {
//     // next is a function. it's a reference to the next middleware
//     return function(next) {
//         // Gets called with action obj that is returned from action creator
//         return function(action) {

//         }
//     }
// }

export default ({ dispatch }) => next => action => {
    // Check if action has a promise on its payload property
    // if it doesn't, send action to next middleware or to reducers if there's no more middlewares in the chain
    if (!action.payload || !action.payload.then) {
        return next(action)
    }

    // if action has promise => wait for it to resolve (get data) and create a new action with the data and dispatch it to reducers
    action.payload.then( response => {
        const newAction = {...action, payload: response}
        dispatch(newAction)
    })
}