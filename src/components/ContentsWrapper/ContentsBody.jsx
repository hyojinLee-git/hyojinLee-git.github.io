import React, { useEffect, useState } from 'react';
import { useContent } from '../../context/ContentContext';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown'
import seoul_garosu from '../../db/posts/seoul-garosu.md';
import report_generator from '../../db/posts/report-generator.md'
import new_project from '../../db/posts/new-project.md'

const StyledContentsBody=styled.div`
    padding: 16px;
    padding-top: 0;
    overflow: auto;
    position: relative;
    margin-left:10%;
    margin-top:3%;
    /* 왜 박스 바깥으로 나가는거지? */
    height: 85%;
`

const contentsList={
    'new_project':new_project,
    'seoul_garosu':seoul_garosu,
    'report_generator':report_generator
}

const ContentsBody = () => {
    const [loading,setLoading]=useState(false);
    const[error,setError]=useState(false)
    const [post,setPost]=useState('')
    const state=useContent();

    const renderers = {
        img: ({alt,src}) => (
            <img 
                alt={alt} 
                src={src} 
                style={{ maxWidth: "100%" }}  />
        ),
        
    };

    useEffect(()=>{
        if (!contentsList[state]) return
        setLoading(true)
        fetch(contentsList[state])
        .then(res=>res.text())
        .then(post=>{
            setPost(post)
            setLoading(false)
        })
        .catch(err=>setError(err))
    },[state])

    return (
        <StyledContentsBody>
            <div style={{width:"80%"}}>
                <ReactMarkdown 

                    children={post}
                    components={renderers}
                />
                {loading && <div>로딩중</div>}
                {error && <div>Not Found</div>}
            </div>
        </StyledContentsBody>
    );
};

export default ContentsBody;