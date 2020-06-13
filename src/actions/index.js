import { SAVE_COMMENT } from 'save_comment'

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}