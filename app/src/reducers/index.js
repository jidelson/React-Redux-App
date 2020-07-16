import {ActionTypes} from '../actions';

const initialState = {
    isLoading: false,
    facts: [],
    errors: null
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.FETCH_FACTS_START:
            return {
                ...state,
                isLoading: true
            };
        case ActionTypes.FETCH_FACTS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                facts: action.payload,
                errors: null
            };
        case ActionTypes.FETCH_FACTS_FAIL:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;    
    }
}