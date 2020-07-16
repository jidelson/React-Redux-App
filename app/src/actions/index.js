import axios from 'axios';

export const ActionTypes = {
    FETCH_FACTS_START: 'FETCH_FACTS_START',
    FETCH_FACTS_SUCCESS: 'FETCH_FACTS_SUCCESS',
    FETCH_FACTS_FAIL: 'FETCH_FACTS_FAIL'
};

export const fetchFacts = () => dispatch => {
    dispatch({ type: ActionTypes.FETCH_FACTS_START });
    axios.get('https://cat-fact.herokuapp.com/facts')
    .then(res => {
        // console.log('RESPONSE',res);
        dispatch({
            type: ActionTypes.FETCH_FACTS_SUCCESS,
            payload: res.data.all
        });
    })
    .catch(err => {
        dispatch({
            type: ActionTypes.FETCH_FACTS_FAIL,
            payload: err
        })
    })
    
}