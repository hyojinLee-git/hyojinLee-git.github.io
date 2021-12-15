import React from 'react';
import styled from '@emotion/styled'
import {FaApple,FaSearch,FaWifi} from 'react-icons/fa'

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
                <li><FaApple/></li>
                <li>Finder</li>
                <li>File</li>
                <li>Edit</li>
                <li>View</li>
                <li>Go</li>
  
            </Ul>
            <Ul>
                <li><FaWifi/></li>
                <li>2:22 AM</li>
                <li>HyoJin</li>
                <li><FaSearch/></li>
            </Ul>
        </Header>
    );
};

export default MenuBar;