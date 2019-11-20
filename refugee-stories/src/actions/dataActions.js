import api from '../utils/api'

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const FETCH_DATA_START_PENDING = "FETCH_DATA_START_PENDING";
export const FETCH_DATA_SUCCESS_PENDING = "FETCH_DATA_SUCCESS_PENDING";
export const FETCH_DATA_FAILURE_PENDING = "FETCH_DATA_FAILURE_PENDING";

export const getStoriesData = () => {
    return dispatch => {
        dispatch({ type: FETCH_DATA_START})
        
        api().get('/stories')
            .then(res => {
                dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_DATA_FAILURE, payload: err.response })
            })

    }
}

export const getPendingStoriesData = () => {
    return dispatch => {
        dispatch({ type: FETCH_DATA_START_PENDING})

        api().get('/stories/a/pending')
            .then(res => {
                dispatch({ type: FETCH_DATA_SUCCESS_PENDING, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_DATA_FAILURE_PENDING, payload: err.response })
            })
    }
}