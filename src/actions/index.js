
export function saveComment(comment) {
    return {
        type: 'SAVE_COMMENT',
        payload: comment
    }
}