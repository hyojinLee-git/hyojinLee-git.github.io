import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DropdownContainer=styled.div`
    position: absolute;
    left: 15px;
    top: 5%;
    background-color: white;
    padding:5px 0;
    border-radius: 5px;
    border-top-left-radius: 0;
    border:1px solid;
    border-top:none;
    box-sizing: border-box;
    z-index: 999;
    @media (min-height:640px){
        top:32px;
    }
    
    
`

const Ul=styled.ul`
    list-style: none;
    padding:0;
    margin:0;
    & > hr{
        margin:8px 10px;
    }
`
const Li=styled.li`
    cursor: pointer;
    padding:0 10px;
    & a{
        color:black;
        text-decoration: none;
    }
    &:hover{
        background-color: skyblue;
    }

`

const Dropdown = () => {

    return (
        <DropdownContainer>
            <Ul>
                <Li>About This Mac</Li>
                <Li>System Preferences</Li>
                <Li>App Store</Li>
                <hr/>
                <Li>Sleep</Li>
                <Li>Restart</Li>
                <Li>Shut Down</Li>
                <hr/>
                <Li>Lock Screen</Li>
                <Li>
                    <Link to="/enter">Log Out HyoJin</Link>
                </Li>
            </Ul>
        </DropdownContainer>
    );
};

export default React.memo(Dropdown);