

export default function(state = [], action) {

    switch( action.type ) {
        case 'SAVE_COMMENT':
            return [action.payload, ...state]
        case 'FETCH_COMMENTS':
            const comments = action.payload.data.map( comment => comment.title )
            return [...comments, ...state]
        default:
            return state
    }

}