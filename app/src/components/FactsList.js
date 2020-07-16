import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';

import { fetchFacts } from '../actions';

import {Card, CardImg, CardBody} from 'reactstrap';

const selector = state => state;

function FactsList(){
    const {isLoading, error, facts} = useSelector(selector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFacts());
    }, [dispatch])

    return(
        <div>
            <h1>Joe's Cat Facts</h1>

         
            {/* <button>Get the facts!</button> */}
            {isLoading && <h4>Loading cat facts...</h4>}
            {error && <p>Uh oh, you have an error... {error}</p>}

            <Card>
            <CardBody body inverse style={{ 
            backgroundColor: 'lightgrey', 
            border: '6px dotted red',
            marginLeft:'15%',
            marginRight:'15%',
            marginTop: '2%',
            marginBottom: '2%',
            paddingTop: '1%',
            paddingBottom: '1%',
            boxShadow: '20px 20px',
            color: 'brown'
            }}>
            {facts.length > 0 && (
                <div>
                    {
                        facts.map(fact => (
                            <div key={fact._id}>
                                
                                <p>{fact.text}</p>
                                
                                
                            </div>
                        ))
                    }
                </div>
            )}
            </CardBody>
            </Card>
        </div>
    )
}



export default FactsList;