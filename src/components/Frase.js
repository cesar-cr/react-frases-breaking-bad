import React from 'react'
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    border-radius: .5rem;
    background-color: #FFF;
    max-width: 800px;
    padding: 3rem;
    
    @media(min-width: 992px){
        margin-top: 10rem;
    }

    h1{
        font-family: Arial, Helvetica, sans-serif;
        position: relative;
        padding-left: 4rem;
        text-align: center;

        &::before{
            content: open-quote;
            color: black;
            font-size:10rem;
            left:-1rem;
            position: absolute;
            top: -2rem;
        }
    }

    p{
        color: #666;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.6rem;
        font-weight: bold;
        text-align: right;
        margin-top:2rem;
    }
`;

const Frase = ({ frase }) => {

    if (Object.keys(frase).length === 0) return null;

    return (
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>{frase.author}</p>
        </ContenedorFrase>
    )
}

Frase.propTypes = {
    frase : PropTypes.object.isRequired
}

export default Frase;
