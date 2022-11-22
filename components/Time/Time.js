import * as React from 'react';
import {useEffect} from "react";
import Card from "../../UI/Card/Card";
import Wrapper from "../../UI/Wrapper/Wrapper"
import "./Time.css"
const Time = (props) => {
    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    let today = new Date();
    const changeDate = today.toLocaleDateString("en-US", options)

    useEffect(() => {
        window.localStorage.setItem('day', JSON.stringify(changeDate));
    }, [changeDate]);

    return ( 
        <Wrapper >
            <Card className = 'date-button-container'> 
                {changeDate}        
            </Card> 
        </Wrapper>
    )
}
export default Time