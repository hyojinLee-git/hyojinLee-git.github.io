import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StlyedComponent=styled.div`
    background-color: #EED6E3;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    
`
const Button=styled.button`
    height: 96px;
    width: 30vh;
    height:5rem ;
    border:none;
    background:#CDACD9;
    border-radius: 20px;
    box-shadow: 10px 12px #6F4376;
    cursor: pointer;
    font-size: 3rem;
    margin-top: 30px;
    &:active{
        transform: translate(5px, 5px);
        box-shadow: 5px 7px #6F4376;

    }
`
const Profile=styled.div`
    background:url(/images/Desktop.png);
    width: 30vh;
    height: 30vh;
    border-radius: 50%;
    background-position: center;
    background-size: 'cover';

`
const Name=styled.div`
    font-size: 2.3rem;
`

const Enter = () => {
    return (
        <StlyedComponent>
            <Profile/>
            <div style={{position:"absolute", top:"50%",left:"50%",transform:"translate(-50%,15vh)",display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Name>HyoJin</Name>
                <Link to="/main">
                    <Button>Enter</Button>
                </Link>
            </div>
            
        </StlyedComponent>

    );
};

export default Enter;