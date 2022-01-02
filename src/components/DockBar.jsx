import React from 'react';
import styled from 'styled-components';
import {SiNotion} from 'react-icons/si'
import {FaGithub,FaTrash, FaTools} from 'react-icons/fa'
import { ExternalLink } from 'react-external-link';

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
    & button{
        position: relative;
        cursor: pointer;
        background: none;
        border:none;
        outline: none;
    }
    & img{
        width: 64px;
    }
    & a{
        color:black
    }
`


const DockBar = ({onClickOpenContent}) => {

    return (
        <StyledDockBar>
            <Ul>
                <li onClick={onClickOpenContent} id="resume">
                    <button>
                        <img src="/images/resume.png" alt="resume"/>
                    </button>
                </li>
                <li>
                    <ExternalLink 
                        href='https://rural-dingo-36b.notion.site/What-I-Learned-0e688629609349c6ba8b5e3428b846c6'
                    >
                        <SiNotion size={64}/>
                    </ExternalLink>
                </li>
                <li onClick={onClickOpenContent} id="tech-stack">
                    <button>
                        <FaTools size={64}/>
                    </button>
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