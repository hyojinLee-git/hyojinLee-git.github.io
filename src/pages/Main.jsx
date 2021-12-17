import React, { useCallback, useState } from 'react';
import DockBar from '../components/DockBar';
import MenuBar from '../components/MenuBar';
import styled from '@emotion/styled';
import ContentsWrapper from '../components/ContentsWrapper/ContentsWrapper';
import {FaRegFolder} from 'react-icons/fa'
import Dropdown from '../components/Dropdown';

const StyledMain=styled.div`
    position: absolute;
    margin: 16px;
    height: 80%;
    box-sizing: border-box;
    right: 0;
`
const Ul=styled.ul`
    list-style: none;
    padding:0;
    &>li{
        display: flex;
        flex-direction: column;
        margin-bottom: 10%;
        align-items: center;
        
        &>img{
        box-sizing: border-box;
        width: 64px;
       
        
        }
    }
    
`

const Main = () => {
    const [openContent,setOpenContent]=useState(false)
    const [showDropdown,setShowDropdown]=useState(false)

    const onClickOpenContent=useCallback(()=>{
        setOpenContent(true)
    },[])
    const onCloseContent=useCallback(()=>{
        setOpenContent(false)
    },[])

    const toggleDropdown=()=>{
        setShowDropdown(prev=>!prev)
    }
    return (
        <>
            <MenuBar 
                toggleDropdown={toggleDropdown} 
                showDropdown={showDropdown}
            />
            { showDropdown && <Dropdown/>}
            <StyledMain>
                <Ul>
                    <li>
                        <FaRegFolder size={64}/>
                        New Folder
                    </li>
                    <li onClick={onClickOpenContent}>
                        <img src="/images/Component223.png" alt="seoul-garosu"/>
                        서울가로수
                    </li>
                </Ul>
                
            </StyledMain>
            { openContent && <ContentsWrapper onCloseContent={onCloseContent}/>}
            <DockBar/>
        </>
    );
};

export default Main;