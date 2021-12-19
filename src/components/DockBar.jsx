import React from 'react';
import styled from '@emotion/styled';
import {SiNotion} from 'react-icons/si'
import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom';

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
    max-width: 1200px;
`

const Ul=styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    padding: 0;
    justify-content: space-around;
    width: 100%;
    & img{
        width: 64px;
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
                <li>이력서</li>
                <li>뭐하지</li>
                <li>
                    {/* <img src="/images/notion_logo.png" alt="notion"/> */}
                    <SiNotion size={64}/>
                </li>
                <li>tech stack</li>
                <li>
                    <Link to="https://github.com/hyojinLee-git" target="_blank"><FaGithub size={64}/></Link>
                </li>
                <li>trash</li>
            </Ul>
        </StyledDockBar>
    );
};

export default DockBar;