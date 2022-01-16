import React, { useCallback, useState } from 'react';
import DockBar from '../components/DockBar';
import MenuBar from '../components/MenuBar';
import styled from 'styled-components';
import ContentsWrapper from '../components/ContentsWrapper/ContentsWrapper';
import Dropdown from '../components/Dropdown';
import {useContentDispatch} from '../context/ContentContext'
import projects from '../db/projects';


const StyledMain=styled.div`
    position: absolute;
    margin: 16px;
    box-sizing: border-box;
    right: 0;
    display: flex;
    max-height: 75vh;

`
const Ul=styled.ul`
    list-style: none;
    padding:0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap-reverse;
    & button{
        display: flex;
        flex-direction: column;
        margin-bottom: 10%;
        align-items: center;
        cursor: pointer;
        background: none;
        outline: none;
        width: 100px;
        border:none;
        
        & img{
        box-sizing: border-box;
        width: 64px;
       
        
        }
    }
    
`



const Main = () => {
    const [openContent,setOpenContent]=useState(false)
    const [showDropdown,setShowDropdown]=useState(false)

    const dispatch=useContentDispatch()


    const onClickOpenContent=useCallback((e)=>{
        const id=e.currentTarget.id
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
            />
            { showDropdown && <Dropdown/>}

            <StyledMain>
                <Ul>
                    {
                        projects.map(project=>(
                            <li 
                                key={project.name} 
                                id={project.name} 
                                onClick={onClickOpenContent}
                            >
                                <button 
                                    onClick={onClickOpenContent}    
                                >                                
                                    <img src={project.icon} alt={project.name}/>
                                    {project.title}
                                </button>
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