import React, { useEffect, useState } from 'react';
import { useContent } from '../../context/ContentContext';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown'
import seoul_garosu from '../../db/posts/seoul-garosu.md';
import report_generator from '../../db/posts/report-generator.md'

const StyledContentsBody=styled.div`
    padding: 16px;
    padding-top: 0;
    overflow: auto;
    position: relative;
    /* border:1px solid red; */
    margin-left:10%;
    margin-top:3%;
    /* 왜 박스 바깥으로 나가는거지? */
    height: 85%;
`

const contentsList={
    'seoul_garosu':seoul_garosu,
    'report_generator':report_generator
}

const markdown=`

# 어떤 프로젝트를 해볼까요?

`


const InlineCode=styled.span`
    background-color: yellow;
`

const InlineCodeblock=(children)=>{
    return <InlineCode>{children.value}</InlineCode>
}

const ContentsBody = () => {
    const [post,setPost]=useState(markdown)
    const state=useContent();

    useEffect(()=>{
        if (!contentsList[state]) return

        fetch(contentsList[state])
        .then(res=>res.text())
        .then(post=>setPost(post))
        .catch(err=>console.log(err))
    },[state])

    return (
        <StyledContentsBody>
            <div style={{width:"80%"}}>
                <ReactMarkdown
                    children={post}
                    components={{
                        inlineCode:InlineCodeblock,
                        // code:InlineCodeblock
                    }}
                >
                    {/* {markdown} */}
                    
                </ReactMarkdown>
                </div>
        </StyledContentsBody>
    );
};

export default ContentsBody;