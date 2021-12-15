import React from 'react';
import styled from '@emotion/styled'

const Header=styled.header`
 display: flex;
 justify-content: space-between;
 align-items: center;
 background-color: white;
 height: 5%;
`

const Ul=styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding:0;
    width: 25%;
    
`
const Li=styled.li`
    list-style: none;
`
const MenuBar = () => {
    return (
        <Header>
            <Ul>
                <Li>logo</Li>
                <Li>Finder</Li>
                <Li>File</Li>
                <Li>Edit</Li>
                <Li>View</Li>
                <Li>Go</Li>
            </Ul>
            <Ul>
                <Li>wifi</Li>
                <Li>2:22 AM</Li>
                <Li>HyoJin</Li>
                <Li>find</Li>
            </Ul>
        </Header>
    );
};

export default MenuBar;