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
    list-style: none;
    
`

const MenuBar = () => {
    return (
        <Header>
            <Ul>
                <li>logo</li>
                <li>Finder</li>
                <li>File</li>
                <li>Edit</li>
                <li>View</li>
                <li>Go</li>
  
            </Ul>
            <Ul>
                <li>wifi</li>
                <li>2:22 AM</li>
                <li>HyoJin</li>
                <li>find</li>
            </Ul>
        </Header>
    );
};

export default MenuBar;