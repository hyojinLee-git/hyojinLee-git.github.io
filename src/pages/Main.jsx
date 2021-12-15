import React, { useCallback, useState } from 'react';
import DockBar from '../components/DockBar';
import MenuBar from '../components/MenuBar';
import styled from '@emotion/styled';
import ContentsWrapper from '../components/ContentsWrapper/ContentsWrapper';

const StyledMain=styled.div`
    position: absolute;
    margin: 3%;
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
        width: 120px;
       
        
        }
    }
    
`

const Main = () => {
    const [openContent,setOpenContent]=useState(false)
    const onClickOpenContent=useCallback(()=>{
        setOpenContent(true)
    },[])
    const onCloseContent=useCallback(()=>{
        setOpenContent(false)
    },[])
    return (
        <>
            <MenuBar/>
            <StyledMain>
                <Ul>
                    <li>
                        <img src="" alt="folder"/>
                        New Folder
                    </li>
                    <li onClick={onClickOpenContent}>
                        <img src="/images/seoul-garosu.png" alt="seoul-garosu"/>
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