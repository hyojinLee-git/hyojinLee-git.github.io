import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import {FaApple,FaSearch,FaWifi} from 'react-icons/fa'


const Header=styled.header`
 display: flex;
 justify-content: space-between;
 align-items: center;
 background-color: white;
 height: 5%;
 max-height: 2rem;
 border:1px solid;
 box-sizing: border-box;
`

const Ul=styled.ul`
    display: flex;
    align-items: center;
    margin:0;
    padding:0;
    list-style: none;
    &>li{
        margin-left: 15px;
        cursor: pointer;
        padding:1px 5px;
        border-radius: 3px;
    }
    &:last-child{
        margin-right: 15px;
    }
    &>li:hover{
        background-color: #E5E5E5;
        box-shadow:1px 1px 3px black;
        transform: translate(-1px,-1px);
    }
    
`

const MenuBar = ({toggleDropdown}) => {
    const today=new Date();
    const [time,setTime]=useState({
        hour:today.getHours(),
        min:today.getMinutes(),
        sec:today.getSeconds()
    })

    useEffect(()=>{
        let interval=time.sec===0? 60000:(60-time.sec)*1000
        const timer=setInterval(()=>{
            const today=new Date()
            setTime({
                ...time,
                hour:today.getHours(),
                min:today.getMinutes(),
                sec:today.getSeconds()
            })
        },interval)     
        return ()=>{ clearInterval(timer)}
    },[time])

    return (
        <Header>
            <Ul>
                <li onClick={toggleDropdown}><FaApple/></li>
                <li>Finder</li>
                <li>File</li>
                <li>Edit</li>
                <li>View</li>
                <li>Go</li>
  
            </Ul>
            <Ul>
                <li><FaWifi/></li>
                <li>{ `
                ${time.hour>12? time.hour-12:time.hour}:${time.min>=10?time.min:`0${time.min}`}
                ${time.hour>=12?'PM':'AM'}` }</li>
                <li>HyoJin</li>
                <li><FaSearch/></li>
            </Ul>

        </Header>
    );
};

export default React.memo(MenuBar);