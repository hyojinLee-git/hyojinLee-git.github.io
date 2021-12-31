import React, { useCallback, useState } from 'react';
import DockBar from '../components/DockBar';
import MenuBar from '../components/MenuBar';
import styled from 'styled-components';
import ContentsWrapper from '../components/ContentsWrapper/ContentsWrapper';
import Dropdown from '../components/Dropdown';
import {useContentDispatch} from '../context/ContentContext'

const StyledMain=styled.div`
    position: absolute;
    margin: 16px;
    height: 80%;
    box-sizing: border-box;
    right: 0;
    display: flex;

`
const Ul=styled.ul`
    list-style: none;
    padding:0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap-reverse;
    &>li{
        display: flex;
        flex-direction: column;
        margin-bottom: 10%;
        align-items: center;
        cursor: pointer;
        
        &>img{
        box-sizing: border-box;
        width: 64px;
       
        
        }
    }
    
`

const projects=[
    {
        name:'new_project',
        title:'New Project',
        icon:'/images/folder.png',
    },
    {
        name:'seoul_garosu',
        title:'서울 가로수',
        icon:'/images/Component223.png',

    },
    {
        name:'report_generator',
        title:'Report Generator',
        icon:'/images/python.png',
    },

    {
        name:'captureMe',
        title:'CaptureMe',
        icon:'/images/captureme_logo.png'
    }
 
]

const Main = () => {
    const [openContent,setOpenContent]=useState(false)
    const [showDropdown,setShowDropdown]=useState(false)
    const dispatch=useContentDispatch()


    const onClickOpenContent=useCallback((e)=>{
        const id=e.currentTarget.id
        //console.log(e.target)
        //console.log(e.currentTarget.id)
        dispatch({
            type:'GET_CONTENT',
            id
        })
        setOpenContent(true)
    },[dispatch])
    const onCloseContent=useCallback(()=>{
        setOpenContent(false)
    },[])

    const toggleDropdown=useCallback(()=>{
        setShowDropdown(prev=>!prev)
    },[])
    return (
        <>
            <MenuBar 
                toggleDropdown={toggleDropdown} 
                showDropdown={showDropdown}
            />
            { showDropdown && <Dropdown/>}
            <StyledMain>
                <Ul>
                    {
                        projects.map(project=>(
                            <li key={project.name} id={project.name} onClick={onClickOpenContent}>
                                <img src={project.icon} alt={project.name}/>
                                {project.title}
                            </li>
                        ))
                    }
                </Ul>
                
            </StyledMain>
            { openContent && <ContentsWrapper onCloseContent={onCloseContent}/>}
            <DockBar onClickOpenContent={onClickOpenContent}/>
        </>
    );
};

export default React.memo( Main);