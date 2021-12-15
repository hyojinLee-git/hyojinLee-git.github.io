import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StlyedComponent=styled.div`
    background-color: #EED6E3;
    height: 100vh;
`
const Button=styled.button`
    height: 96px;
    
    &>a{
        color:black;
        text-decoration:none;
        font-size: 48px;
    }
`

const Enter = () => {
    return (
        <StlyedComponent>
            <Button>
                <Link to="/main">enter</Link>
            </Button>
            
        </StlyedComponent>

    );
};

export default Enter;