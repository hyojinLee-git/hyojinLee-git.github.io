import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown'
import source from '../../db/posts/seoul-garosu.md';

const StyledContentsBody=styled.div`
    padding: 16px;
    padding-top: 0;
    overflow: auto;
    position: relative;
    /* 왜 박스 바깥으로 나가는거지? */
    height: 90%;
`

const markdown=`

# h1

**thick**

text

\`\`\`
code block
\`\`\`

*기울이기*

글자 \`배경색\`

>quote

`


const InlineCode=styled.span`
    background-color: yellow;
`

const InlineCodeblock=(children)=>{
    return <InlineCode>{children.value}</InlineCode>
}

const ContentsBody = () => {
    const [post,setPost]=useState(markdown)
    useEffect(()=>{
        fetch(source)
        .then(res=>res.text())
        .then(post=>setPost(post))
        .catch(err=>console.log(err))
    },[])
    return (
        <StyledContentsBody>
            <ReactMarkdown
                children={post}
                components={{
                    inlineCode:InlineCodeblock,
                    // code:InlineCodeblock
                }}
            >
                {/* {markdown} */}
                
            </ReactMarkdown>
        </StyledContentsBody>
    );
};

export default ContentsBody;