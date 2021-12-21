import React from 'react';
import styled from '@emotion/styled';

const DropdownContainer=styled.div`
    position: absolute;
    left: 15px;
    top: 5%;
    
    background-color: white;
    padding:5px 10px;
    border-radius: 5px;
    border-top-left-radius: 0;
    border:1px solid;
    border-top:none;
    box-sizing: border-box;
    z-index: 999;
    
`

const Ul=styled.ul`
    list-style: none;
    padding:0;
    margin:0
`
const Li=styled.li`
    cursor: pointer;
    &:hover{
        background-color: skyblue;
    }

`
const menuItems=[
    'About This Mac',
    'System Preferences',
    'App Store',
    '--------------------',
    'Sleep',
    'Restart',
    'Shut Down',
    '--------------------',
    'Lock Screen',
    'Log Out HyoJin'
]
const Dropdown = () => {
    return (
        <DropdownContainer>
            <Ul>
                {
                    menuItems.map((menuItem,idx)=><Li key={idx}>{menuItem}</Li>)
                }
            </Ul>
        </DropdownContainer>
    );
};

export default Dropdown;