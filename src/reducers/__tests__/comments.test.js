import commentsReducer from 'reducers/commentsReducer'

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: 'SAVE_COMMENT',
        payload: 'New Comment'
    }
    const newState =  commentsReducer([], action)
    expect(newState).toEqual(['New Comment'])
})

it('handles action with unkown type', () => {
    // pass in an empty action with no type to commentsReducer
    const newState = commentsReducer([], {})
    expect(newState).toEqual([])
})