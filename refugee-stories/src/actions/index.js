import api from '../utils/api'

export const GET_STORIES_DATA_START = 'GET_STORIES_DATA_START'
export const GET_STORIES_DATA_SUCCESS = 'GET_STORIES_DATA_SUCCESS'
export const GET_STORIES_DATA_FAILURE = 'GET_STORIES_DATA_FAILURE'

export function fetchData() {
    return dispatch => {
        dispatch({ type: GET_STORIES_DATA_START })
        api()
        .get('/posts')
        .then(res => {console.log("RES STORIES", res)
            dispatch({ type:GET_STORIES_DATA_SUCCESS, payload: res.data })})
        .catch(err => {
            dispatch({ type: GET_STORIES_DATA_FAILURE, payload: err.response})
        })
    }
}

export const POST_STORIES_DATA_START = 'POST_STORIES_DATA_START'
export const POST_STORIES_DATA_SUCCESS = 'POST_STORIES_DATA_SUCCESS'
export const POST_STORIES_DATA_FAILURE = 'POST_STORIES_DATA_FAILURE'

export function postData(story) {
    return dispatch => {
        dispatch({ type: POST_STORIES_DATA_START, payload: story })
        api()
        .post('/posts/new', story)
        .then(res => {
            console.log('RES POST', res)
            dispatch({ type: POST_STORIES_DATA_SUCCESS, payload: res.data })
        })
        .catch(err => {dispatch({ type: POST_STORIES_DATA_FAILURE, payload: err.response })})
    }
}

export const REMOVE_STORIES_DATA_START = 'REMOVE_STORIES_DATA_START'
export const REMOVE_STORIES_DATA_SUCCESS = 'REMOVE_STORIES_DATA_SUCCESS'
export const REMOVE_STORIES_DATA_FAILURE = 'REMOVE_STORIES_DATA_FAILURE'

export function deleteStory(id) {
    return dispatch => {
        dispatch({ type: REMOVE_STORIES_DATA_START })
        api()
        .delete(`/posts/${id}`)
        .then(res => {
            dispatch({ type: REMOVE_STORIES_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: REMOVE_STORIES_DATA_FAILURE, payload: err.response })
        })
    }
}
