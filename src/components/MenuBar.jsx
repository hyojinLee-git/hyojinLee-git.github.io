import React from 'react';
import styled from 'styled-components'
import {FaApple,FaSearch,FaWifi} from 'react-icons/fa'


const Header=styled.header`
 display: flex;
 justify-content: space-between;
 align-items: center;
 background-color: white;
 height: 5%;
 max-height: 2rem;
 border:1px solid;
 box-sizing: border-box;
`

const Ul=styled.ul`
    display: flex;
    align-items: center;
    margin:0;
    padding:0;
    list-style: none;
    &>li{
        margin-left: 15px;
        cursor: pointer;
        padding:1px 5px
    }
    &:last-child{
        margin-right: 15px;
    }
    &>li:hover{
        background-color: skyblue;
    }
    
`

const MenuBar = ({showDropdown,toggleDropdown}) => {
    return (
        <Header>
            <Ul>
                <li onClick={toggleDropdown}><FaApple/></li>
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