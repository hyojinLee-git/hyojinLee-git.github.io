import React from 'react';
import styled from 'styled-components';
import {MdClose,MdMinimize,MdOpenInFull} from 'react-icons/md'
const Header=styled.div`
    background-color: white;
    border-radius: 20px;
    margin-bottom: 16px;

`
const Ul=styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    padding:0;
    margin:0;
`
const Li=styled.li`
    border-radius: 50%;
    width: 16px;
    height: 16px;
    border:1px solid #d2ceda;
    box-sizing: border-box;
    background-color: ${props=>props.backgroundColor};
    margin-right: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &>*{
        opacity: 0;
    }
    &:hover{
        &>*{opacity:1;}
    }

`
const ContentsHeader = ({onCloseContent}) => {
    return (
        <Header>
            <Ul>
                <Li onClick={onCloseContent} backgroundColor="#FF0000">
                    <MdClose color='#483c30'/>
                </Li>
                <Li backgroundColor="#F4C24D">
                    <MdMinimize color='#483c30'/>
                    
                    
                </Li>
                <Li backgroundColor="#65C557">
                    <MdOpenInFull color='#483c30'/>
                </Li>
            </Ul>
        </Header>
    );
};

export default ContentsHeader;