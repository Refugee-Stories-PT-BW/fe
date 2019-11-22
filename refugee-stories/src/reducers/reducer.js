import {
    FETCH_DATA_START_PENDING,
    FETCH_DATA_SUCCESS_PENDING,
    FETCH_DATA_FAILURE_PENDING,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../actions'

const initialState = {

    approvedStories: [{
        title:'',
        contents: '',
        pending: ''
    }],
    pendingStories: [{
        title:'',
        contents: '',
        pending: ''
    }],
    isLoading: false,
    error: ''

}

export const reducer = ( state = initialState, action ) => {
    console.log("reduce test:", state);
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                approvedStories: [action.payload],
                error: ''
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case FETCH_DATA_START_PENDING:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_DATA_SUCCESS_PENDING:
            return {
                ...state,
                isLoading: false,
                pendingStories: action.payload,
                isLoading: false
            }
        case FETCH_DATA_FAILURE_PENDING:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}