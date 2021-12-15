import React from 'react';
import styled from '@emotion/styled';

const StyledDockBar=styled.div`
    position: absolute;
    bottom: 20px;
    margin-top: 20px;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(255,255,255,0.5);
    border-radius: 20px;
    height: 10%;
    width: 80%;
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
                    <img src="/images/notion_logo.png" alt="notion"/>
                </li>
                <li>tech stack</li>
                <li>github</li>
                <li>trash</li>
            </Ul>
        </StyledDockBar>
    );
};

export default DockBar;