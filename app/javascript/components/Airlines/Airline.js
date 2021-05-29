import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'


const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff
    text-align: center;
`
const AirlineLogo = styled.div`
    width: 50px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;
    
    img {
        height: 50px;
        width: 50px;
        border-radius: 100%;
        border: 1px solid #efefef; 
    }
`
const AirlineName = styled.div`
    padding: 20px 0 10px 0;
`
const AirlineWrapper = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;
    a {
        color: #fff;
        background: #000;
        border-radius: 4px;
        padding: 10px 50px;
        border: 1px solid #000;
        width: 100%;
        text-decoration: none;
    }

`

const AirlineCard = (airline) => {
    return (
        <Card>
            <AirlineLogo>
                <img src={airline.attributes.image_url} alt={airline.attributes.name} />
            </AirlineLogo>
            <AirlineName>{airline.attributes.name}</AirlineName>
            <div className="airline-score">{airline.attributes.avg_score}</div>
            <AirlineWrapper>
                <Link to={`/airlines/${airline.attributes.slug}`}>View Airline</Link>
            </AirlineWrapper>
        </Card>
    )
}

export default AirlineCard