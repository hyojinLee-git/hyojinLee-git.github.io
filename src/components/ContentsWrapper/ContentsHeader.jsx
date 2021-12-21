import React from 'react';
import styled from 'styled-components';
import {MdClose} from 'react-icons/md'
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
    background-color: ${props=>props.backgroundColor};
    margin-right: 10px;
    cursor: pointer;

`
const ContentsHeader = ({onCloseContent}) => {
    return (
        <Header>
            <Ul>
                <Li onClick={onCloseContent} backgroundColor="#FF0000">
                    <MdClose/>
                </Li>
                <Li backgroundColor="#F4C24D"></Li>
                <Li backgroundColor="#65C557"></Li>
            </Ul>
        </Header>
    );
};

export default ContentsHeader;