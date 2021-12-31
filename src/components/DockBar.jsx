import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import {SiNotion} from 'react-icons/si'
import {FaGithub,FaTrash, FaTools,FaPlayCircle} from 'react-icons/fa'
import { ExternalLink } from 'react-external-link';
import {useContentDispatch} from '../context/ContentContext'

const StyledDockBar=styled.div`
    position: absolute;
    bottom: 10px;
    margin-top: 20px;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(255,255,255,0.5);
    border-radius: 20px;
    height: 10%;
    width: 60%;
    max-width: 1000px;
    padding: 5px 10px;
`

const Ul=styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    padding: 0;
    justify-content: space-between;
    width: 100%;
    &> li{
        position: relative;
        cursor: pointer;
    }
    & img{
        width: 64px;
        /* width: 70%; */
    }
    & a{
        color:black
    }
`

// const Li=styled.li`
//     margin-right: 10px;
// `


const DockBar = ({onClickOpenContent}) => {

    return (
        <StyledDockBar>
            <Ul>
                <li onClick={onClickOpenContent}>
                
                     <img src="/images/resume2.png" alt="resume" id="resume"/>
 

                </li>
                <li>
                    <ExternalLink 
                        href='https://rural-dingo-36b.notion.site/What-I-Learned-0e688629609349c6ba8b5e3428b846c6'
                    >
                        <SiNotion size={64}/>
                    </ExternalLink>
                    
                </li>
                <li onClick={onClickOpenContent} id="tech-stack">
                    <FaTools size={64} id="tech-stack"/>
                </li>
                <li>
                    <ExternalLink href="https://github.com/hyojinLee-git">
                        <FaGithub size={64}/>
                    </ExternalLink>
                </li>
                <li>
                    <FaTrash size={64}/>
                </li>
            </Ul>
        </StyledDockBar>
    );
};

export default React.memo(DockBar);