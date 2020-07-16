import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';

import { fetchFacts } from '../actions';

const selector = state => state;

function FactsList(){
    const {isLoading, error, facts} = useSelector(selector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFacts());
    }, [])

    return(
        <div>
            {isLoading && <h4>Loading cat facts...</h4>}
            {error && <p>Uh oh, you have an error... {error}</p>}
            {facts.length > 0 && (
                <div>
                    {
                        facts.map(fact => (
                            <div key={fact._id}>
                                {fact.text}
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    )
}



export default FactsList;