import React from 'react';
import styled from '@emotion/styled';
import {SiNotion} from 'react-icons/si'
import {FaGithub,FaTrash,FaUser,FaUserPlus,FaTools,FaPlayCircle} from 'react-icons/fa'
import { ExternalLink } from 'react-external-link';
import {VscTools} from 'react-icons/vsc'

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
    width: 80%;
    max-width: 1000px;
    padding: 5px 10px;
`

const Ul=styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    padding: 0;
    justify-content: space-around;
    width: 100%;
    &> li{
        position: relative;
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


const DockBar = () => {
    return (
        <StyledDockBar>
            <Ul>
                <li>
                    <img src="/images/resume2.png" alt="resume"/>
                    <br/>
                    고민

                </li>
                <li>
                    <FaPlayCircle size={64}/>
                    <br/>
                    뭐하지
                </li>
                <li>
                    {/* <img src="/images/notion_logo.png" alt="notion"/> */}
                    <SiNotion size={64}/>
                </li>
                <li>
                    <VscTools size={64}/><br/> 여기도고민
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

export default DockBar;