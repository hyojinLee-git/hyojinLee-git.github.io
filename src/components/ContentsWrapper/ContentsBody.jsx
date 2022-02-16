import React, { useEffect, useState } from 'react';
import { useContent } from '../../context/ContentContext';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown'
import seoulGarosu from '../../db/posts/seoul-garosu.md';
import reportGenerator from '../../db/posts/report-generator.md'
import captureMe from '../../db/posts/captureme.md'
import techStack from '../../db/posts/tech-stack.md'
import resume from '../../db/posts/resume.md'
import { Scrollbars } from 'react-custom-scrollbars';
import newProject from '../../db/posts/new-project.md'
import seeStead from '../../db/posts/see-stead.md'



const StyledContentsBody=styled.div`
    padding: 16px;
    padding-top: 0;
    margin-left:10%;
    margin-top:3%;
    height: 100%;
    & .resume-subtitle{
        color:#D9730D
    }
    & #prize{
        width: 50%;
    }
`

const contentsList={
    'seoul_garosu':seoulGarosu,
    'report_generator':reportGenerator,
    'captureMe':captureMe,
    'tech-stack':techStack,
    'resume':resume,
    'seeStead':seeStead
}


const ContentsBody = () => {
    const [loading,setLoading]=useState(false);
    const[error,setError]=useState(false)
    const [post,setPost]=useState('')
    const state=useContent();

    const renderers = {
        h2:(props)=>(
            // eslint-disable-next-line jsx-a11y/heading-has-content
            <h2 
                {...props} 
                className={state==='resume'? 'resume-subtitle':''}
            />
        ),
        img: ({alt,src}) => (
                <img 
                    alt={alt} 
                    src={src} 
                    id={state==='seoul_garosu'&& alt==='prize'?'prize':''}
                    style={{ maxWidth: "100%" }}  
                />
        ),
        a:(props)=>(
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <a {...props} style={{color:'#757573'}}/>
        ),
        
        
    };

    useEffect(()=>{

        setLoading(true)
        if (!contentsList[state]) {
            fetch(newProject)
            .then(res=>res.text())
            .then(post=>{
                setPost(post)
                setLoading(false)
            })
            .catch(err=>setError(err))
            return
        }
        
        fetch(contentsList[state])
        .then(res=>res.text())
        .then(post=>{
            setPost(post)
            setLoading(false)
        })
        .catch(err=>setError(err))
    },[state])

    return (
       <Scrollbars autoHide style={{height:"90%"}}>
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
     </Scrollbars>
    );
};

export default ContentsBody;